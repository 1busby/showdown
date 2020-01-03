import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppStore } from '../../../../shared/app.store';

@Component({
  selector: 'app-home',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private router: Router, private appStore: AppStore) {
  }

  createTournament() {
    this.router.navigateByUrl('/tournament/create');
  }
}
