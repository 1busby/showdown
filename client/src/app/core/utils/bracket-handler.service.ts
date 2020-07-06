import { AppStore } from '@app/core';
import { Injectable } from '@angular/core';
import _ from 'lodash';

import { MatchContainer } from '@app/core';
import { ITournament, IContestant } from '@app/shared';

@Injectable({ providedIn: 'root' })
export class BracketHandler {
  activeTournament: Partial<ITournament>;
  activeContestants: Partial<IContestant>[] = [];
  numContestants: number; // number of contestants
  numTotalMatches: number; // number of total matches in the tournament
  matchContainers: MatchContainer[] = []; // all the matches in this tournament

  numRows: number; // number of rows for layout ()
  high2Power: number; // the next 2^x after numContestants
  numRounds: number; // number of rounds, therefore number of columns

  // positions of seeds in order.
  // the index corresponds to the seed, the value
  // is the position in the first row for that seed
  seedsByIndex = [];
  bigSkip: number; // the biggest skip in matches for seeding this tournament

  // two dimensional array to store matches for each round
  // matchesPerRound[round][match]
  matchesPerRound = [];

  containerWidth = 0;
  containerHeight = 0;
  matchWidth;
  matchHeight;
  padding = 16;

  constructor(private appStore: AppStore) {}

  createBracket(bracket: Partial<ITournament>) {
    this.activeTournament = bracket;
    this.activeContestants = bracket.contestants;
    this.matchContainers = [];
    this.numContestants = this.activeContestants.length;
    this.createSeededBracket();
    this.defineLayoutPlacements();

    // if this is a previously stored match, update the winners
    if (this.activeTournament.matches && this.activeTournament.matches.length > 1) {
      this.matchContainers.forEach((match, i) => {
        if (this.activeTournament.matches[i].winnerSeed) {
          match.updateWinner(this.activeTournament.matches[i].winnerSeed);
        }
      });
    }
    this.appStore.setMatchContainers(this.matchContainers);
  }

  createSeededBracket() {
    this.high2Power = this.pow2RoundUp(this.numContestants);
    this.bigSkip = this.high2Power / 4;
    this.seedsByIndex = [];
    this.seedMatcher(1);

    this.numRounds = Math.log(this.high2Power) / Math.log(2);
    this.matchesPerRound = [];
    const maxNumFirstRoundMatches = this.high2Power / 2;
    for (let i = 0; i < this.numRounds; i++) {
      this.matchesPerRound[i] = [];
    }

    // Add the appropriate amount of matches per round.
    // Starts from the winner and moves back.
    let matchNumber = 0;
    for (let i = 0; i < this.numRounds; i++) {
      for (let j = 0; j < maxNumFirstRoundMatches / Math.pow(2, i); j++) {
        const newMatch = new MatchContainer();
        newMatch.roundNumber = i + 1;
        newMatch.matchNumber = matchNumber;
        matchNumber++;
        this.matchesPerRound[i][j] = newMatch;
        this.matchContainers.push(this.matchesPerRound[i][j]);
      }
    }

    // Subscribe each match to the appropriate preceding matches.
    for (let i = this.numRounds - 1; i > 0; i--) {
      for (let j = 0; j < maxNumFirstRoundMatches / Math.pow(2, i); j++) {
        this.matchesPerRound[i][j].setHighMatch(
          this.matchesPerRound[i - 1][j * 2]
        );
        this.matchesPerRound[i][j].setLowMatch(
          this.matchesPerRound[i - 1][j * 2 + 1]
        );
        this.matchesPerRound[i - 1][j * 2].addObserver(
          this.matchesPerRound[i][j]
        );
        this.matchesPerRound[i - 1][j * 2 + 1].addObserver(
          this.matchesPerRound[i][j]
        );
      }
    }

    let numSeeded = 0;
    // place contestants in the correct match based on their seed
    for (let i = 0; i < this.high2Power / 2; i++) {
      if (numSeeded >= this.high2Power / 2) {
        break;
      }
      this.matchesPerRound[0][this.seedsByIndex[i] - 1].addContestant(
        this.activeContestants[i]
      );
      numSeeded++;
    }
    // loop backwards the other way for the second half
    for (let i = 0; i < this.activeContestants.length - this.bigSkip * 2; i++) {
      if (numSeeded >= this.numContestants) {
        break;
      }
      this.matchesPerRound[0][
        this.seedsByIndex[this.seedsByIndex.length - 1 - i] - 1
      ].addContestant(this.activeContestants[this.bigSkip * 2 + i]);
      numSeeded++;
    }
  }

  /**
   * Recursive function that seeds first round matches
   * depending on the number of matchSlots
   *
   * MUST be given 1 as a parameter when
   * called outside itself
   *
   * TODO: Change that ^ so this function doesn't
   * rely on this class
   *
   * @param moveSpaces  The amount of matches to move
   * @return            New indexes to apply algorithm to
   */
  seedMatcher(moveSpaces) {
    moveSpaces *= 2;
    let indexes;

    if (moveSpaces < this.bigSkip) {
      indexes = this.seedMatcher(moveSpaces);
    } else {
      // First 2 seed are anomalous to the pattern
      if (this.bigSkip === 1) {
        // if tourny size is 4
        this.seedsByIndex.push(1);
        this.seedsByIndex.push(2);
      } else if (this.bigSkip === 2) {
        // if tournament size 8
        this.seedsByIndex.push(1);
        this.seedsByIndex.push(3);
        this.seedsByIndex.push(4);
        this.seedsByIndex.push(2);
      } else {
        this.seedsByIndex.push(1);
        this.seedsByIndex.push(1 + moveSpaces);
      }
      indexes = [];
      indexes[0] = 1;
      indexes[1] = 0;
      return indexes;
    }

    // indexes of newly placed seed
    // this will be returned to use for the next placements
    const newIndexes = [];
    let movesDone = 0;
    for (let i = 0; i < indexes.length; i++) {
      newIndexes[i] = this.seedsByIndex.length;
      this.seedsByIndex.push(this.seedsByIndex[indexes[i]] + moveSpaces);
      ++movesDone;
    }

    if (movesDone < this.bigSkip / moveSpaces) {
      for (let j = indexes.length - 1; j >= 0; j--) {
        newIndexes[movesDone] = this.seedsByIndex.length;
        this.seedsByIndex.push(this.seedsByIndex[indexes[j]] - moveSpaces);
        ++movesDone;
      }
    }

    // Reverse new indexes so next cycle indexes backwards
    newIndexes.reverse();

    // Because we
    if (moveSpaces === 2) {
      moveSpaces = 1;
      for (let k = this.seedsByIndex.length - 1; k >= 0; k--) {
        this.seedsByIndex.push(this.seedsByIndex[k] + moveSpaces);
      }
    }
    return newIndexes;
  }

  defineLayoutPlacements() {
    // this.containerWidth = window.innerWidth - this.padding * 2;
    // this.containerHeight = window.innerHeight - this.padding * 2;

    this.matchWidth = this.containerWidth / 3 - this.padding;
    this.matchHeight = this.containerHeight / 4 - this.padding;

    const soonToBeRemovedMatches = [];
    for (let i = 0; i < this.matchesPerRound.length; i++) {
      for (let j = 0; j < this.matchesPerRound[i].length; j++) {
        const thisMatch = this.matchesPerRound[i][j];
        if (i === 0) {
          if (!thisMatch.lowSeed) {
            thisMatch.updateWinner(thisMatch.highSeed);
            soonToBeRemovedMatches.push(thisMatch);
            thisMatch.updateWinner(MatchContainer.HIGHSEED);
          }
          thisMatch.top = (this.matchHeight + this.padding) * j + this.padding;
          thisMatch.left = 0 + this.padding;
          thisMatch.width = this.matchWidth;
          thisMatch.height = this.matchHeight;
        } else {
          thisMatch.top =
            thisMatch.highMatch.top -
            (thisMatch.highMatch.top - thisMatch.lowMatch.top) / 2;
          thisMatch.left =
            thisMatch.highMatch.left + this.matchWidth + this.padding;
          thisMatch.width = this.matchWidth;
          thisMatch.height = this.matchHeight;
        }
      }
    }
    this.matchContainers = this.matchContainers.filter((m) => {
      return soonToBeRemovedMatches.indexOf(m) === -1;
    });
  }

  /**
   * Round down to next higher power of 2 (return x if it's already a power of 2).
   *
   * @param x  The number in question
   * @return   The next highest power of 2
   */
  pow2RoundUp(x) {
    if (x < 0) {
      return 0;
    }
    --x;
    // tslint:disable-next-line: no-bitwise
    x |= x >> 1;
    // tslint:disable-next-line: no-bitwise
    x |= x >> 2;
    // tslint:disable-next-line: no-bitwise
    x |= x >> 4;
    // tslint:disable-next-line: no-bitwise
    x |= x >> 8;
    // tslint:disable-next-line: no-bitwise
    x |= x >> 16;
    return x + 1;
  }

  /**
   * Round down to next lower power of 2 (return x if it's already a power of 2).
   *
   * @param x  The number in question
   * @return   The next lowest power of 2
   */
  pow2RoundDown(x) {
    if (x < 0) {
      return 0;
    }
    // tslint:disable-next-line: no-bitwise
    x |= x >> 1;
    // tslint:disable-next-line: no-bitwise
    x |= x >> 2;
    // tslint:disable-next-line: no-bitwise
    x |= x >> 4;
    // tslint:disable-next-line: no-bitwise
    x |= x >> 8;
    // tslint:disable-next-line: no-bitwise
    x |= x >> 16;
    // tslint:disable-next-line: no-bitwise
    return x - (x >> 1);
  }

  setContainerDimensions(width: number, height: number) {
    this.containerWidth = width - this.padding * 2;
    this.containerHeight = height - this.padding * 2;
  }
}