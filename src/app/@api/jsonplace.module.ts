import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { JsonplaceService } from './jsonplaceholder/services/jsonplace.service';



@NgModule({
  declarations: [],
  providers: [
    JsonplaceService,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class JsonplaceAPIModule { }