import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { FavoriteDetails } from '../../models/favorite-details';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss'],
})
export class FavoritesPageComponent implements OnInit {
  favoritesList?: FavoriteDetails[];

  constructor(private readonly favoritesService: FavoritesService) {}

  ngOnInit(): void {
    // Retrieve list of favorites.
    this.favoritesList = this.favoritesService.getFavoritesList();
  }

  clearFavorites(): void {
    this.favoritesService.clearFavorites();
    // The clearFavorites method is guaranteed to succeed.
    // I therefore directly reflect the change in the component's state.
    this.favoritesList = [];
  }
}
