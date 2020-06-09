import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  ElementRef,
  Self
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BracketHandler } from '../bracket-handler.service';
import { MatchContainer } from '@app/core';
import { DataService } from '../data.service';
import { ITournament } from '../../../../../../shared/models';

@Component({
  selector: 'bracket-view',
  templateUrl: './bracket-view.component.html',
  styleUrls: ['./bracket-view.component.scss']
})
export class BracketViewComponent implements OnChanges, OnInit {
  showingModal = false;

  matches: BehaviorSubject<MatchContainer[]>;

  @Input() tournament: ITournament;

  constructor(
    @Self() private element: ElementRef,
    private bracketHandler: BracketHandler,
    private data: DataService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit() {
    this.matches = this.data.getMatchContainers();
    this.bracketHandler.setContainerDimensions(
      this.element.nativeElement.firstElementChild.offsetWidth,
      this.element.nativeElement.firstElementChild.offsetHeight
    );
    this.bracketHandler.createBracket({
      contestants: [
        {
          name: 'A',
          seed: 0
        },
        {
          name: 'B',
          seed: 1
        },
        {
          name: 'C',
          seed: 2
        },
        {
          name: 'D',
          seed: 4
        }
      ]
    });
  }

  // showEditModal() {
  //   if (!this.showingModal) {
  //     this.showingModal = true;
  //     const editModal = this.modalCtrl.create('EditBracketPage');
  //     editModal.present();
  //     setTimeout(() => {
  //       console.log('TIMEOUT OVER');
  //       this.showingModal = false;
  //     }, 2000);
  //   }
  // }

  showMatchDetails(match: MatchContainer) {
    // console.log('pushing MatchDetailsPage onto the stack');
    // this.navCtrl.push('MatchDetailPage', { match });
  }
}
