import { Component, OnInit } from '@angular/core';
import { Highway } from '../../models/highway';
import { FavoriteDetails } from '../../models/favorite-details';
import { AutobahnService } from '../../services/autobahn.service';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-highways-page',
  templateUrl: './highways-page.component.html',
  styleUrls: ['./highways-page.component.scss'],
})
export class HighwaysPageComponent implements OnInit {
  highways: Highway[] = [];
  favoritesList?: FavoriteDetails[];
  totalRecords: number = 10;
  page: number = 1;
  collection: any[] = [];

  constructor(
    private readonly autobahnService: AutobahnService,
    private readonly favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.favoritesList = this.favoritesService.getFavoritesList();

    // Request a list of all highways, and create a Highway object for each including the favorite details where available.
    this.autobahnService.listHighways().subscribe((lhr) => {
      this.highways = lhr.roads.map((highwayId) =>
        this.getHighwayObject(highwayId)
      );
    });
  }

  getHighwayObject(highwayId: string): Highway {
    return {
      id: highwayId,
      // If the highway is favorited, include the favorite details.
      favoriteDetails:
        this.favoritesList?.find((fd) => fd.highwayId === highwayId) ?? null,
    };
  }
}
