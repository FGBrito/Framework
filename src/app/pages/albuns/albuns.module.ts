import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbunsComponent } from './albuns.component';
import { AlbunsRoutingModule } from './albuns-routing.module';
import { MaterialExampleModule } from './../../../material.module';

@NgModule({
  declarations: [AlbunsComponent],
  imports: [
    CommonModule,
    AlbunsRoutingModule,
    MaterialExampleModule,
  ]
})
export class AlbunsModule { }
