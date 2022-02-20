import { Injectable } from '@angular/core';
import { FavoriteDetails } from '../models/favorite-details';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  constructor() { }

  getFavoritesList(): FavoriteDetails[] {
    const storageEntry = localStorage.getItem('favoritesList');

    return storageEntry === null ? [] : JSON.parse(storageEntry) as FavoriteDetails[];
  }
  
  getFavoriteDetails(highwayId: string): FavoriteDetails | null {
    const favoritesList = this.getFavoritesList();
    const highwayEntry = favoritesList.find(favoriteDetails => favoriteDetails.highwayId === highwayId) ?? null;

    return highwayEntry;
  }

  insertFavoriteDetails(favoriteDetails: FavoriteDetails) {
    const originalFavoritesList = this.getFavoritesList();
    // Create a new favorites list with the updated details by first clearing the corresponding details if any,
    // then inserting the new details.
    const finalFavoritesList = [
      ...originalFavoritesList.filter(fd => fd.highwayId !== favoriteDetails.highwayId),
      favoriteDetails
    ];

    this.setFavoritesList(finalFavoritesList);
  }

  removeFavoriteDetails(highwayId: string) {
    const originalFavoritesList = this.getFavoritesList();
    // Create a new favorites list with the updated details by clearing the corresponding details.
    const finalFavoritesList =
      originalFavoritesList.filter(fd => fd.highwayId !== highwayId);

    this.setFavoritesList(finalFavoritesList);
  }

  clearFavorites() {
    localStorage.removeItem('favoritesList');
  }
  
  private setFavoritesList(favoritesList: FavoriteDetails[]): void {
    // Local storage only allows us to store string values, so we use JSON to encode the list as a string.
    const storageEntry = JSON.stringify(favoritesList);

    localStorage.setItem('favoritesList', storageEntry);
  }
}
