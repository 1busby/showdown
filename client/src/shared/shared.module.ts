import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TournamentDataService } from './data/tournament/tournament.data.service';

@NgModule({
  exports: [FormsModule, ReactiveFormsModule, MaterialModule],
  providers: [TournamentDataService]
})
export class SharedModule {}
