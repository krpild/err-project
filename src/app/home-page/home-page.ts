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
  infoDump! : string;

  ngOnInit(): void {
    this.apiService.getEverythingFromApi().subscribe(groups =>{
      groups.forEach((groupItems:any) => {
        console.log(groupItems.header)
        groupItems.data.forEach((item:any) => {
          console.log(item.canonicalUrl)
          console.log(item.verticalPhotos[0].photoUrlBase)
        })
      });
    })
    
  }
}
