import { Component, Input, signal } from '@angular/core';
import { ITEMS_DISPLAYED } from '../../constants';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
  @Input() bannerImage!: string;
  @Input() redirectUrl!: string;
  sizePercentage = signal((1 / ITEMS_DISPLAYED * 100).toString() + "%")
}
