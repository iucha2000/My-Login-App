import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from '../../components/card/card.component';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserFormComponent } from '../add-user-form/add-user-form.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, CardComponent, EditFormComponent, AddUserFormComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule {}