import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.html',
  styleUrl: './banner.css'
})
export class Banner {
  @Input() bannerImage!: string;
  @Input() redirectUrl!: string;
}
