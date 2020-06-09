import {
  Component,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { ITournament } from '../../../../../../../shared/models';

@Component({
  selector: 'tournament-card',
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.scss']
})
export class TournamentCardComponent {
  @Input() tournament: ITournament;
  @Output() selectTournament: EventEmitter<ITournament> = new EventEmitter<ITournament>();

  constructor() {}

  onSelect(tournament: ITournament) {
    this.selectTournament.emit(tournament);
  }
}
