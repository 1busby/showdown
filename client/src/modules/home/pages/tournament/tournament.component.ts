import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { ITournament, IContestant } from '../../../../../../shared/models';
import { AppStore } from 'src/shared/app.store';
import { TournamentDataService } from 'src/shared/data/tournament/tournament.data.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit, OnDestroy {
  tournament: BehaviorSubject<Partial<ITournament>>;
  ngUnsubscribe: Subject<any> = new Subject<any>();

  contestantList: Partial<IContestant>[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appStore: AppStore,
    private tournamentDataService: TournamentDataService
  ) {}

  ngOnInit() {
    this.tournament = this.appStore.currentTournament;
    this.route.paramMap
      .pipe(
        takeUntil(this.ngUnsubscribe),
        switchMap((params: ParamMap) =>
          this.tournamentDataService.getTournament(
            null,
            params.get('linkCode')
          )
        )
      )
      .subscribe(result => {
        debugger
        if (!this.appStore.currentTournament.value) {
          this.router.navigateByUrl('/');
        }
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  joinClicked() {
    this.router.navigateByUrl(
      `/tournament/${this.tournament.value.linkCode}/join`
    );
  }
}
