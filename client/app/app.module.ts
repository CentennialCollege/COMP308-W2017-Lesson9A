// angular stuff
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule, RequestOptions } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';

// Components
import { AppComponent } from './app.component';

// Routers
import { AppRoutes } from './app.routes';

// Subcomponents
import { GamesModule } from './games/games.module';

@NgModule({
  imports:      [BrowserModule, HttpModule, FormsModule, GamesModule,
                RouterModule.forRoot(AppRoutes)],
  declarations: [AppComponent],
  providers:    [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap:    [AppComponent]
})
export class AppModule { }
