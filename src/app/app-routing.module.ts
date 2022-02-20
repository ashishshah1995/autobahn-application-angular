import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighwaysPageComponent } from './containers/highways-page/highways-page.component';
import { FavoritesPageComponent } from './containers/favorites-page/favorites-page.component';
import { HighwayPageComponent } from './containers/highway-page/highway-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/highways' },
  { path: 'highways', children: [
    { path: '', component: HighwaysPageComponent },
    { path: 'favorites', component: FavoritesPageComponent },
    { path: ':highwayId', component: HighwayPageComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
