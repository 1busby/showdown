import { ITeam, ISet, IMatch, IContestant } from '@app/shared';
import { MatchObserver } from './match-observer';
import { MatchSubject } from './match-subject';

export class MatchContainer extends MatchSubject implements MatchObserver {
  static HIGHSEED = 'HIGHSEED';
  static LOWSEED = 'LOWSEED';

  match: IMatch;

  highSeed: IContestant; // higher seeded contestant that will be shown at top
  lowSeed: IContestant; // lower seeded contestant that will be shown at bottom
  highMatch: IMatch; // match from previous round that will determine our high seed
  lowMatch: IMatch; // match from previous round that will determine our low seed

  sets: ISet[] = [];

  winner: IContestant; // the winner of this match;
  winnerSeed: string;

  width;
  height;
  top;
  left;

  update() {
    this.highSeed = this.highMatch.winner;
    this.lowSeed = this.lowMatch.winner;
  }

  updateWinner(seed: string) {
    if (seed === MatchContainer.HIGHSEED) {
      this.winner = this.highSeed;
      this.winnerSeed = MatchContainer.HIGHSEED;
    }
    if (seed === MatchContainer.LOWSEED) {
      this.winner = this.lowSeed;
      this.winnerSeed = MatchContainer.LOWSEED;
    }
    this.notifyObservers();
    // this.next(this.match);
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
      console.log('New high seed by default.');
      this.highSeed = contestant; // store in high seed
      return null;
    } else if (!this.lowSeed) {
      // if only low seed is empty
      if (this.highSeed.seed <= contestant.seed || !contestant.seed) {
        // if the current higher seed has better or equal seed
        console.log('New low seed.');
        this.lowSeed = contestant; // store in low seed
        return null;
      } else {
        console.log('New high seed, demoted prev to low seed.');
        this.lowSeed = this.highSeed; // move current high seed to low
        this.highSeed = contestant; // store new contestant in high seed
        return null;
      }
    } else if (!this.highSeed) {
      // if only the high seed is empty
      if (contestant.seed && this.lowSeed.seed > contestant.seed) {
        // if the current lower seed has worse seed
        console.log('New high seed.');
        this.highSeed = contestant; // sotre in high seed
        return null;
      } else {
        console.log('New low seed, promoted prev to high seed.');
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
        console.log('New low seed, returned old low seed.');
        const temp = this.lowSeed;
        this.lowSeed = contestant; // save newbie to low seed
        return temp; // and return the removed contestant
        // the new contestant had more than the high seed
      } else if (this.highSeed.seed > contestant.seed) {
        console.log('New high seed, returned old low seed.');
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
  setHighMatch(match: IMatch) {
    this.highMatch = match;
    this.highSeed = match.winner;
  }

  getHighMatch() {
    return this.highMatch;
  }

  // save a reference to the low match so we can
  // try to grab the winner in our update function
  setLowMatch(match: IMatch) {
    this.lowMatch = match;
    this.lowSeed = match.winner;
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
      'height.px': this.height
    };
  }

  getData() {
    return {
      highSeed: this.highSeed._id,
      lowSeed: this.lowSeed._id,
      highMatch: this.highMatch,
      lowMatch: this.lowMatch,

      matchRounds: this.sets,

      winner: this.winner._id,
      winnerSeed: this.winnerSeed
    };
  }
}
