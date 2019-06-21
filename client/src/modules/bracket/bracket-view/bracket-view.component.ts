import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BracketHandler } from '../bracket-handler.service';
import { MatchContainer } from './../../../shared/models/match-container';
import { DataService } from './../data.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'bracket-view',
  templateUrl: './bracket-view.component.html',
  styleUrls: ['./bracket-view.component.scss']
})
export class BracketViewComponent implements OnInit {
  showingModal = false;

  matches: BehaviorSubject<MatchContainer[]>;

  constructor(
    private bracketHandler: BracketHandler,
    private data: DataService
  ) {}

  ngOnInit() {
    this.matches = this.data.getMatchContainers();

    this.bracketHandler.createBracket({
      contestants: [
        {
          alias: 'A',
          seed: 0
        },
        {
          alias: 'B',
          seed: 1
        },
        {
          alias: 'C',
          seed: 2
        },
        {
          alias: 'D',
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
