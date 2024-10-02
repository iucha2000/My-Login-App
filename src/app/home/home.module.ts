import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../header/header.component';
import { CardComponent } from '../card/card.component';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, CardComponent, EditFormComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule {}