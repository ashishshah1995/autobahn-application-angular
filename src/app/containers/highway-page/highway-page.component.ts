import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FavoriteDetails } from '../../models/favorite-details';
import { Roadwork } from '../../models/roadwork';
import { AutobahnService } from '../../services/autobahn.service';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-highway-page',
  templateUrl: './highway-page.component.html',
  styleUrls: ['./highway-page.component.scss'],
})
export class HighwayPageComponent implements OnInit {
  highwayId?: string;
  roadworks?: Roadwork[];
  favoriteDetails?: FavoriteDetails | null;
  firstFavoriteInsertion: boolean = false;
  isLoaded: boolean = true;

  favoriteDetailsForm = new FormGroup({
    comment: new FormControl('', [Validators.required]),
    colorCode: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly route: ActivatedRoute,
    private readonly autobahnService: AutobahnService,
    private readonly favoritesService: FavoritesService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // Get the highway's ID from the URL.
      this.highwayId = params['highwayId'];
      this.isLoaded = true;
      // Since I've updated the highway ID, I need to update the data to reflect the correct highway.
      this.update();
    });
  }

  addToFavorites(): void {
    if (this.highwayId !== undefined) {
      // Update the change in the UI.
      // It will not be saved right now, as the user needs to provide a comment and color code.
      this.favoriteDetails = {
        highwayId: this.highwayId,
        comment: '',
        colorCode: '',
      };

      // Mark this as the first favorite insertion, because the highway has not yet been committed to storage.
      this.firstFavoriteInsertion = true;
    }
  }

  removeFromFavorites(): void {
    if (this.highwayId !== undefined) {
      this.favoriteDetails = null;
      this.favoritesService.removeFavoriteDetails(this.highwayId);
    }
  }

  saveFavoriteChanges(): void {
    // If the form is in an invalid state, do not allow the user to proceed.
    if (this.favoriteDetailsForm.invalid) return;

    // Use the data in the form to update the saved details.
    // This is also used to insert the details for the first time.
    this.favoritesService.insertFavoriteDetails({
      highwayId: this.highwayId,
      ...this.favoriteDetailsForm.value,
    });

    // The highway has been inserted, so this is no longer the first favorite insertion.
    this.firstFavoriteInsertion = false;

    // Clear the form's trackers because it now reflects the state as saved.
    this.favoriteDetailsForm.markAsPristine();
    this.favoriteDetailsForm.markAsUntouched();
  }

  private update() {
    if (this.highwayId !== undefined) {
      // Get the roadworks for this highway.
      this.autobahnService
        .getHighwayRoadworks(this.highwayId)
        .subscribe((hrr) => {
          this.isLoaded = false;
          this.roadworks = hrr.roadworks;
        });

      // Get the favorite details for this highway.
      this.favoriteDetails = this.favoritesService.getFavoriteDetails(
        this.highwayId
      );

      if (this.favoriteDetails !== null) {
        // I reset the form to the stored details.
        // This automatically clears the trackers, which we need because it reflects the state as saved.
        this.favoriteDetailsForm.reset(this.favoriteDetails);
      }
    }
  }
}
