import { HttpClient } from '@angular/common/http/public_api';
import { Http, HttpModule } from '@angular/http';
import { KittenApiService } from './kitten-api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoolStorageModule } from 'angular2-cool-storage';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { KittenOverviewComponent } from './kitten-overview/kitten-overview.component';
import { KittenBlockComponent } from './kitten-block/kitten-block.component';

@NgModule({
  declarations: [
    AppComponent,
    KittenOverviewComponent,
    KittenBlockComponent
  ],
  imports: [
    CoolStorageModule,
    HttpModule,
    BrowserModule,
    MasonryModule
  ],
  providers: [KittenApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
