import { Component, Input } from '@angular/core';
import { Highway } from '../../models/highway';

@Component({
  selector: 'app-highway-card',
  templateUrl: './highway-card.component.html',
  styleUrls: ['./highway-card.component.scss']
})
export class HighwayCardComponent {
  @Input()
  highway?: Highway;
}
