import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { BracketModule } from '../bracket/bracket.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, BracketModule],
})
export class HomeModule {}
