import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';
import { BracketViewComponent } from './bracket-view/bracket-view.component';

@NgModule({
  declarations: [BracketViewComponent],
  imports: [CommonModule, SharedModule],
  exports: [BracketViewComponent]
})
export class BracketModule {}
