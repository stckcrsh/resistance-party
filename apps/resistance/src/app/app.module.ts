import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MissionsModule } from '@resistance/missions';
import { VoteTrackerModule } from '@resistance/vote-tracker';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MissionsModule,
    VoteTrackerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
