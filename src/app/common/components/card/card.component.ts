import { Component, OnInit, Input } from '@angular/core';
import { LaunchModel } from '../../models/launch.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data: LaunchModel;
}
