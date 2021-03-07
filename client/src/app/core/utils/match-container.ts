import { ISet, IMatch, IContestant } from '@app/shared';
import { MatchObserver } from './match-observer';
import { MatchSubject } from './match-subject';

export class MatchContainer extends MatchSubject implements MatchObserver {
  static HIGHSEED = 'HIGHSEED';
  static LOWSEED = 'LOWSEED';

  _id: string;
  matchNumber: number;
  roundNumber: number;
  // optional label for displaying extra information about this match
  viewLabel: string;
  highSeedSource: 'winner' | 'loser';
  lowSeedSource: 'winner' | 'loser';

  highSeed: IContestant; // higher seeded contestant that will be shown at top
  lowSeed: IContestant; // lower seeded contestant that will be shown at bottom
  highMatch: MatchContainer; // match from previous round that will determine our high seed
  lowMatch: MatchContainer; // match from previous round that will determine our low seed

  sets: ISet[] = [];

  winner: IContestant; // the winner of this match;
  loser: IContestant; // the loser of this match;
  winnerSeed: string;

  hasLowSeed = true;

  width;
  height;
  top;
  left;

  update() {
    this.highSeed = this.highMatch[this.highSeedSource];
    this.lowSeed = this.lowMatch[this.lowSeedSource];
  }

  updateWinner(seed: string) {
    if (seed === MatchContainer.HIGHSEED) {
      this.winner = this.highSeed;
      this.loser = this.lowSeed ? this.lowSeed : null;
      this.winnerSeed = MatchContainer.HIGHSEED;
    }
    if (seed === MatchContainer.LOWSEED) {
      this.winner = this.lowSeed;
      this.loser = this.highSeed;
      this.winnerSeed = MatchContainer.LOWSEED;
    }
    this.notifyObservers();
  }

  /**
   * Places the given contestant in the high seed slot
   *
   * @param matchSlot MatchSlot to add to match
   * @return           Returns either replaced contestant or null if spot was open
   */
  setHighSeed(contestant) {
    if (this.highSeed === null) {
      this.highSeed = contestant;
      return null;
    } else {
      const temp = this.highSeed;
      this.highSeed = contestant;
      return temp;
    }
  }

  /**
   * Places the given contestant in the high seed slot
   *
   * @param matchSlot MatchSlot to add to match
   * @return           Returns either replaced contestant or null if spot was open
   */
  setLowSeed(contestant) {
    if (this.lowSeed === null) {
      this.lowSeed = contestant;
      return null;
    } else {
      const temp = this.lowSeed;
      this.lowSeed = contestant;
      return temp;
    }
  }

  /**
   * This method is used to add a contestant to a match
   * and will add it to the correct seed based on
   * contestant's seed.
   *
   * WARNING!
   * If match is full, will kick a player out of the match
   * and return it.
   *
   * @param contestant Contestant to add to match
   * @return
   */
  addContestant(contestant) {
    if (!this.highSeed && !this.lowSeed) {
      // if both high and low seeds are empty
      this.highSeed = contestant; // store in high seed
      return null;
    } else if (!this.lowSeed) {
      // if only low seed is empty
      if (this.highSeed.seed <= contestant.seed || !contestant.seed) {
        // if the current higher seed has better or equal seed
        this.lowSeed = contestant; // store in low seed
        return null;
      } else {
        this.lowSeed = this.highSeed; // move current high seed to low
        this.highSeed = contestant; // store new contestant in high seed
        return null;
      }
    } else if (!this.highSeed) {
      // if only the high seed is empty
      if (contestant.seed && this.lowSeed.seed > contestant.seed) {
        // if the current lower seed has worse seed
        this.highSeed = contestant; // sotre in high seed
        return null;
      } else {
        this.highSeed = this.lowSeed; // move current low seed to high seed
        this.lowSeed = contestant; // store new contestant in high seed
        return null;
      }
    } else {
      // if the new contestant has better seed than the low seed and worse than the high seed
      if (
        this.highSeed.seed <= contestant.seed &&
        contestant.seed > this.lowSeed.seed
      ) {
        const temp = this.lowSeed;
        this.lowSeed = contestant; // save newbie to low seed
        return temp; // and return the removed contestant
        // the new contestant had more than the high seed
      } else if (this.highSeed.seed > contestant.seed) {
        const temp = this.lowSeed;
        this.lowSeed = this.highSeed;
        this.highSeed = contestant;
        return temp;
      } else {
        console.log(`OOPS! ${contestant.name} was not added to the match.`);
        return contestant;
      }
    }
  }

  // save a reference to the high match so we can
  // try to grab the winner in our update function
  setHighMatch(match: MatchContainer, source: 'winner' | 'loser' = 'winner') {
    this.highSeedSource = source;
    this.highMatch = match;
  }

  getHighMatch() {
    return this.highMatch;
  }

  // save a reference to the low match so we can
  // try to grab the winner in our update function
  setLowMatch(match: MatchContainer, source: 'winner' | 'loser' = 'winner') {
    this.lowSeedSource = source;
    this.lowMatch = match;
  }

  getLowMatch() {
    return this.lowMatch;
  }

  getStyleObject() {
    return {
      position: 'absolute',
      'top.px': this.top,
      'left.px': this.left,
      'width.px': this.width,
      'height.px': this.height,
    };
  }

  setData(matchData: IMatch) {
    // tslint:disable-next-line: forin
    for (const key in matchData) {
      this[key] = matchData[key];
    }
  }

  getData(): IMatch {
    return {
      _id: this._id,
      highSeedNumber: this.highSeed ? this.highSeed.seed : null,
      lowSeedNumber: this.lowSeed ? this.lowSeed.seed : null,
      matchNumber: this.matchNumber,
      roundNumber: this.roundNumber,
      winnerSeed: this.winnerSeed,
      sets: this.sets.map((set) => {
        const { __typename, completedOn, startedOn, ...setData } = set;
        return setData;
      }),
    };
  }
}
