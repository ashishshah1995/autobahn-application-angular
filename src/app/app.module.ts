import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighwaysPageComponent } from './containers/highways-page/highways-page.component';
import { FavoritesPageComponent } from './containers/favorites-page/favorites-page.component';
import { HighwayPageComponent } from './containers/highway-page/highway-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HighwayCardComponent } from './components/highway-card/highway-card.component';
import { RoadworkCardComponent } from './components/roadwork-card/roadwork-card.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HighwaysPageComponent,
    FavoritesPageComponent,
    HighwayPageComponent,
    NavigationBarComponent,
    HighwayCardComponent,
    RoadworkCardComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
