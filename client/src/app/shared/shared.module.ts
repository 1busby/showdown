import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  providers: []
})
export class SharedModule {}
