import { Component } from '@angular/core';
import { IUser } from '../../../../../../shared/models';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent {
  contestants: IUser[] = [];

  constructor() {}

}
