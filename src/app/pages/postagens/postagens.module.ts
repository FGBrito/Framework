import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonplaceAPIModule } from './../../@api';

import { PostagensRoutingModule } from './postagens-routing.module';
import { PostagensComponent } from './postagens.component';
import { MaterialExampleModule } from '../../../material.module';



@NgModule({
  declarations: [PostagensComponent],
  imports: [
    CommonModule,
    JsonplaceAPIModule,
    MaterialExampleModule,
    PostagensRoutingModule,
  ]
})
export class PostagensModule { }
