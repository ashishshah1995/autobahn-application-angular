import { Component, Input } from '@angular/core';
import { Roadwork } from '../../models/roadwork';

@Component({
  selector: 'app-roadwork-card',
  templateUrl: './roadwork-card.component.html',
  styleUrls: ['./roadwork-card.component.scss']
})
export class RoadworkCardComponent {
  @Input()
  roadwork?: Roadwork;
}
