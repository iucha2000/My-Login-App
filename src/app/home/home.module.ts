import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, CardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule {}