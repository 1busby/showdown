import { MatchObserver } from './match-observer';

export abstract class MatchSubject {
  observers: MatchObserver[] = [];

  addObserver(observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => {
      return observer !== obs;
    });
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}
