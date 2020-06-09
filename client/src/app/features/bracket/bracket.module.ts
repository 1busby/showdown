import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared';
import { BracketHandler } from './bracket-handler.service';
import { DataService } from './data.service';
import { BracketViewComponent } from './bracket-view/bracket-view.component';

@NgModule({
  declarations: [BracketViewComponent],
  imports: [CommonModule, SharedModule],
  providers: [BracketHandler, DataService],
  exports: [BracketViewComponent]
})
export class BracketModule {}
