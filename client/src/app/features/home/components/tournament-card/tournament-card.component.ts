import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ITournament } from '@app/shared';

@Component({
  selector: 'tournament-card',
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentCardComponent {
  @Input() tournament: ITournament;
  @Input() canDelete: boolean;
  @Output()
  selectTournament: EventEmitter<ITournament> = new EventEmitter<ITournament>();
  @Output() delete: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() userClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  onSelect(tournament: ITournament) {
    this.selectTournament.emit(tournament);
  }

  onDelete(event) {
    this.delete.emit(true);
    event.stopPropagation();
  }

  onUserClick(event, user) {
    event.stopPropagation();
    this.userClicked.emit(user);
  }
}
