import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../services/api-service';
import { catchError } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [JsonPipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage implements OnInit {
  apiService = inject(ApiService)
  //this is evil.
  infoDump : any;

  ngOnInit(): void {
    this.apiService.getEverythingFromApi()
    .pipe(
      catchError((err) => {console.log(err); throw err;}))
      .subscribe((data) => {this.infoDump = data})
    console.log(this.infoDump)
  }
}
