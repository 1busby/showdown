import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [FormsModule, ReactiveFormsModule, MaterialModule]
})
export class SharedModule {}
