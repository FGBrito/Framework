import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AlbunsModule } from './pages/albuns/albuns.module';
import { PostagensModule } from './pages/postagens/postagens.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { ToDosModule } from './pages/to-dos/to-dos.module';
import { NotFoundModule } from './pages/not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    PostagensModule,
    AlbunsModule,
    ToDosModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
