import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/select/select.component';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    //export shared
    HeaderComponent,
    SelectComponent
  ]


})
export class SharedModule { }
