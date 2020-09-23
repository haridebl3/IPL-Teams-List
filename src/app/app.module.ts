import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
import { TeamDetailsComponent } from './Components/team-details/team-details.component';
import { PlayerDetailsComponent } from './Components/player-details/player-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TeamDetailsComponent,
    PlayerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
