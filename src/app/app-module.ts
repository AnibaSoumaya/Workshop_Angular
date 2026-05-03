import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { FormsModule } from '@angular/forms';
import { Home } from './core/home/home';
import { Notfound } from './core/notfound/notfound';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [App, Header, Footer, Home, Notfound],
  imports: [BrowserModule, AppRoutingModule, FormsModule,CommonModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
