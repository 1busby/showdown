import { Injectable } from '@angular/core';

import { AppStore } from '../services/app.store.service';
import { MatchContainer } from './match-container';
import { ITournament, IContestant } from '@app/shared';

@Injectable({ providedIn: 'root' })
export class BracketHandler {
  containerWidth = 0;
  containerHeight = 0;
  matchWidth;
  matchHeight;
  margin = 16;
  numRows: number; // number of rows for layout ()
  high2Power: number; // the next 2^x after numContestants
  numRounds: number; // number of rounds, therefore number of columns
  /**
   * positions of seeds in order.
   * the index corresponds to the seed, the value
   * is the position in the first row for that seed
   */
  seedsByIndex = [];
  bigSkip: number; // the biggest skip in matches for seeding this tournament
  activeTournament: Partial<ITournament>;
  numTotalMatches: number; // number of total matches in the tournament
  matchContainers: MatchContainer[] = []; // all the matches in this tournament
  /**
   * two dimensional array to store matches for each round
   * matchesPerRound[round][match]
   */
  matchesPerRound = [];
  losersMatchContainers: MatchContainer[] = []; // all the matches in this tournament
  /**
   * two dimensional array to store matches for each round
   * matchesPerRound[round][match]
   */
  losersMatchesPerRound = [];

  constructor(private appStore: AppStore) {}

  createBracket(bracket: Partial<ITournament>) {
    this.activeTournament = bracket;
    this.createSeededBracket();
    this.matchContainers = this.defineLayoutPlacements();
    this.losersMatchContainers = this.defineLosersLayoutPlacements();

    if (
      this.activeTournament.matches &&
      this.activeTournament.matches.length > 0
    ) {
      this.matchContainers.forEach((match, i) => {
        match.setData(this.activeTournament.matches[i]);
        if (
          this.activeTournament.matches[i] &&
          this.activeTournament.matches[i].winnerSeed
        ) {
          match.updateWinner(this.activeTournament.matches[i].winnerSeed);
        }
      });
    } else {
      this.matchContainers.forEach((matchContainer, index) => {
        matchContainer.matchNumber = index;
      });
    }

    this.appStore.setMatchContainers(
      this.matchContainers,
      this.losersMatchContainers
    );
  }

  createSeededBracket() {
    this.high2Power = this._pow2RoundUp(this.activeTournament.contestantCount);
    this.bigSkip = this.high2Power / 4;
    this.seedsByIndex = [];
    this._seedMatcher(1);
    this.numRounds = Math.log(this.high2Power) / Math.log(2);
    const maxNumFirstRoundMatches = this.high2Power / 2;

    this._createMatchContainers(this.numRounds, maxNumFirstRoundMatches);
    this._populateContestants(
      this.activeTournament.contestants,
      this.activeTournament.contestantCount
    );
  }

  private _createMatchContainers(
    numRounds: number,
    maxNumFirstRoundMatches: number
  ) {
    this.matchesPerRound = [];
    this.losersMatchesPerRound = [];

    let losersMatchNumber = 0;
    let losersMatchNumberOffset = -(maxNumFirstRoundMatches * 1.5);

    // Add the appropriate amount of matches per round.
    for (let roundNumber = 0; roundNumber < numRounds; roundNumber++) {
      this.matchesPerRound.push([] as MatchContainer[]);
      this.losersMatchesPerRound.push([] as MatchContainer[]);
      if (roundNumber > 1) {
        this.losersMatchesPerRound.push([] as MatchContainer[]);
      }
      const matchCountThisRound =
        maxNumFirstRoundMatches / Math.pow(2, roundNumber);

      for (let j = 0; j < matchCountThisRound; j++) {
        const newMatch = new MatchContainer();
        newMatch.roundNumber = roundNumber + 1;
        this.matchesPerRound[roundNumber][j] = newMatch;
        // this.matchContainers.push(this.matchesPerRound[roundNumber][j]);
        if (roundNumber > 0) {
          this.matchesPerRound[roundNumber][j].setHighMatch(
            this.matchesPerRound[roundNumber - 1][j * 2]
          );
          this.matchesPerRound[roundNumber][j].setLowMatch(
            this.matchesPerRound[roundNumber - 1][j * 2 + 1]
          );
          this.matchesPerRound[roundNumber - 1][j * 2].addObserver(
            this.matchesPerRound[roundNumber][j]
          );
          this.matchesPerRound[roundNumber - 1][j * 2 + 1].addObserver(
            this.matchesPerRound[roundNumber][j]
          );
        }

        if (this.activeTournament.structure === 'double-elim') {
          let losersMatch: MatchContainer;
          if (roundNumber === 0) {
            if (j % 2 === 0) {
              losersMatch = new MatchContainer();
              losersMatch.matchNumber = losersMatchNumber;
              losersMatchNumber++;
              losersMatch.roundNumber = 1;
              losersMatch.setHighMatch(newMatch, 'loser');
              newMatch.addObserver(losersMatch);
              this.losersMatchesPerRound[roundNumber][
                Math.floor(j / 2)
              ] = losersMatch;
            } else {
              losersMatch = this.losersMatchesPerRound[roundNumber][
                Math.floor(j / 2)
              ];
              losersMatch.setLowMatch(newMatch, 'loser');
              newMatch.addObserver(losersMatch);
            }
          } else if (roundNumber === 1) {
            losersMatch = new MatchContainer();
            losersMatch.matchNumber = losersMatchNumber;
            losersMatchNumber++;
            const lowMatch = this.losersMatchesPerRound[0][j];
            losersMatch.roundNumber = roundNumber + 1;
            losersMatch.setHighMatch(newMatch, 'loser');
            newMatch.addObserver(losersMatch);
            losersMatch.setLowMatch(lowMatch);
            lowMatch.addObserver(losersMatch);
            this.losersMatchesPerRound[roundNumber][j] = losersMatch;
          } else {
            const losersRound: number = this.losersMatchesPerRound.length - 1;
            const matchNumber1 = losersMatchNumber + losersMatchNumberOffset;
            const matchNumber2 = matchNumber1 + matchCountThisRound;
            losersMatchNumber++;

            const losersMatch1 = new MatchContainer();
            losersMatch1.matchNumber = matchNumber1;
            const parentBase =
              this.losersMatchesPerRound[losersRound - 1].length * 2;
            const highSeedMatch = this.losersMatchesPerRound[losersRound - 2][
              parentBase
            ];
            const lowSeedMatch = this.losersMatchesPerRound[losersRound - 2][
              parentBase + 1
            ];
            losersMatch1.roundNumber = losersRound - 1;
            losersMatch1.setHighMatch(highSeedMatch);
            losersMatch1.setLowMatch(lowSeedMatch);
            highSeedMatch.addObserver(losersMatch1);
            lowSeedMatch.addObserver(losersMatch1);
            this.losersMatchesPerRound[losersRound - 1][j] = losersMatch1;

            const losersMatch2 = new MatchContainer();
            losersMatch2.matchNumber = matchNumber2;
            losersMatch2.roundNumber = losersRound;
            losersMatch2.setHighMatch(newMatch, 'loser');
            losersMatch2.setLowMatch(losersMatch1);
            newMatch.addObserver(losersMatch2);
            losersMatch1.addObserver(losersMatch2);
            this.losersMatchesPerRound[losersRound][j] = losersMatch2;
          }
        }
      }

      losersMatchNumberOffset += matchCountThisRound;
    }
  }

  private _populateContestants(
    contestants: Partial<IContestant>[],
    contestantLimit
  ) {
    // place contestants in the correct match based on their seed
    // assumes contestants are sorted by seed
    let numSeeded = 0;
    for (let i = 0; i < this.high2Power / 2; i++) {
      if (numSeeded >= this.high2Power / 2) {
        break;
      }
      this.matchesPerRound[0][this.seedsByIndex[i] - 1].addContestant(
        contestants[i]
      );
      numSeeded++;
    }
    // loop backwards the other way for the second half
    for (let i = 0; i < contestants.length - this.bigSkip * 2; i++) {
      if (numSeeded >= contestantLimit) {
        break;
      }
      this.matchesPerRound[0][
        this.seedsByIndex[this.seedsByIndex.length - 1 - i] - 1
      ].addContestant(contestants[this.bigSkip * 2 + i]);
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
  private _seedMatcher(moveSpaces) {
    moveSpaces *= 2;
    let indexes;

    if (moveSpaces < this.bigSkip) {
      indexes = this._seedMatcher(moveSpaces);
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
    this.matchWidth = Math.max(this.containerWidth / 4 - this.margin, 200);
    this.matchHeight = Math.max(this.containerHeight / 6 - this.margin, 75);

    const matches: MatchContainer[] = [];
    const soonToBeRemovedMatches: MatchContainer[] = [];
    const soonToBeRemovedIndexes: number[] = [];
    for (let i = 0; i < this.matchesPerRound.length; i++) {
      for (let j = 0; j < this.matchesPerRound[i].length; j++) {
        const thisMatch: MatchContainer = this.matchesPerRound[i][j];
        matches.push(thisMatch);
        // first round
        if (i === 0) {
          if (!thisMatch.lowSeed) {
            soonToBeRemovedMatches.push(thisMatch);
            soonToBeRemovedIndexes.push(j);
            thisMatch.updateWinner(MatchContainer.HIGHSEED);
          }
          thisMatch.top =
            (this.matchHeight + this.margin) * j + this.margin * (j + 1);
          thisMatch.left = 0 + this.margin;
        } else {
          thisMatch.top =
            thisMatch.highMatch.top -
            (thisMatch.highMatch.top - thisMatch.lowMatch.top) / 2;
          thisMatch.left =
            thisMatch.highMatch.left + this.matchWidth + this.margin * (i + 1);
        }
        thisMatch.width = this.matchWidth;
        thisMatch.height = this.matchHeight;
      }
    }

    for (let index = soonToBeRemovedIndexes.length - 1; index >= 0; index--) {
      this.matchesPerRound[0].splice(soonToBeRemovedIndexes[index], 1);
    }
    return matches.filter((m) => {
      return soonToBeRemovedMatches.indexOf(m) === -1;
    });
  }

  defineLosersLayoutPlacements() {
    this.matchWidth = Math.max(this.containerWidth / 4 - this.margin, 200);
    this.matchHeight = Math.max(this.containerHeight / 6 - this.margin, 75);

    // create an offest bracket to the left if
    // entire first round moves forward
    let leftOffset = 0;
    if (
      this.matchesPerRound[0].length === this.losersMatchesPerRound[0].length
    ) {
      leftOffset += this.matchWidth + this.margin;
    }

    const matches: MatchContainer[] = [];
    const soonToBeRemovedMatches: MatchContainer[] = [];
    for (let i = 0; i < this.losersMatchesPerRound.length; i++) {
      for (let j = 0; j < this.losersMatchesPerRound[i].length; j++) {
        const thisMatch: MatchContainer = this.losersMatchesPerRound[i][j];
        matches.push(thisMatch);
        // first round
        if (i === 0) {
          if (thisMatch.highSeed === null) {
            soonToBeRemovedMatches.push(thisMatch);
            const byeMatch = thisMatch.observers[0] as MatchContainer;
            thisMatch.lowMatch.addObserver(byeMatch);
            byeMatch.setLowMatch(thisMatch.lowMatch, 'loser');
          }
          thisMatch.top =
            (this.matchHeight + this.margin) * j + this.margin * (j + 1) + 200;
          thisMatch.left = this.margin;
        } else {
          let matchSpace =
            this.losersMatchesPerRound[0][0].top -
            this.losersMatchesPerRound[0][1].top;
          let matchTop = 0;
          if (i % 2 === 0) {
            const losersMatchIndex = (j + 1) * 2 - 1;
            matchSpace =
              this.losersMatchesPerRound[i - 1][0].top -
              this.losersMatchesPerRound[i - 1][1].top;
            matchTop =
              this.losersMatchesPerRound[i - 1][losersMatchIndex].top +
              matchSpace / 2;
          } else {
            matchTop =
              this.losersMatchesPerRound[i - 1][j].top + matchSpace / 2;
          }

          thisMatch.top = matchTop;
          thisMatch.left =
            thisMatch.lowMatch.left +
            this.matchWidth +
            this.margin * (i + 1) -
            leftOffset;
        }
        thisMatch.width = this.matchWidth;
        thisMatch.height = this.matchHeight;

        thisMatch.matchNumber -= soonToBeRemovedMatches.length;
      }

      // 0 left offset because we use previous round as reference point
      if (i === 1) {
        leftOffset = 0;
      }
    }
    return matches.filter((m) => {
      return soonToBeRemovedMatches.indexOf(m) === -1;
    });
  }

  // not being used
  private _setupExistingBracket(tournament: Partial<ITournament>) {
    this.high2Power = this._pow2RoundUp(tournament.contestantCount);
    this.bigSkip = this.high2Power / 4;
    this._createMatchContainers(
      tournament.matches[tournament.matches.length - 1].roundNumber,
      this.high2Power / 2
    );

    this._populateContestants(
      tournament.contestants,
      tournament.contestantCount
    );

    const matchContainers = this.defineLayoutPlacements();

    matchContainers.forEach((match, i) => {
      match.setData(tournament.matches[i]);
      if (tournament.matches[i].winnerSeed) {
        match.updateWinner(tournament.matches[i].winnerSeed);
      }
    });

    this.appStore.setMatchContainers(matchContainers);
  }

  /**
   * Round up to next highest power of 2 (return x if it's already a power of 2).
   *
   * @param x  The number in question
   * @return   The next highest power of 2
   */
  private _pow2RoundUp(x) {
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
  private _pow2RoundDown(x) {
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
    this.containerWidth = width - this.margin * 2;
    this.containerHeight = height - this.margin * 2;
  }
}
