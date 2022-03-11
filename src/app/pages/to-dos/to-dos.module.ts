import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDosRoutingModule } from './to-dos-routing.module';
import { ToDosComponent } from './to-dos.component';
import { MaterialExampleModule } from './../../../material.module';

@NgModule({
  declarations: [ToDosComponent],
  imports: [
    CommonModule,
    ToDosRoutingModule,
    MaterialExampleModule,
  ]
})
export class ToDosModule { }
