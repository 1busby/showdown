import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [MatButtonModule, MatGridListModule, MatIconModule, MatCardModule]
})
export class MaterialModule {}
