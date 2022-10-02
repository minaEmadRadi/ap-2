import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SelectComponent } from './components/select/select.component';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,

  ],
  exports: [
    //export shared
    HeaderComponent,
    SelectComponent
  ]


})
export class SharedModule { }
