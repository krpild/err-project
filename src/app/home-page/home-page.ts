import { Component, inject, OnInit, signal } from '@angular/core';
import { ApiService } from '../services/api-service';
import { catchError } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { bannerCollection } from '../models/bannerCollection';
import { banner } from '../models/banner';
import { Banner } from "../components/banner/banner";
import { Carousel } from "../components/carousel/carousel";

@Component({
  selector: 'app-home-page',
  imports: [Banner, Carousel],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage implements OnInit {
  apiService = inject(ApiService)
  
  bannerCollections = signal<Array<bannerCollection>>([]);

  ngOnInit(): void {
    this.apiService.getEverythingFromApi().subscribe(groups =>{
      groups.forEach((groupItems:any) => {
        let bannerCollectionInstance: bannerCollection = {
          header: groupItems.header,
          collection: []
        }
        groupItems.data.forEach((item:any) => {
          let bannerInstance: banner = {
            id: item.id,
            redirectUrl: item.canonicalUrl,
            imageUrl: item.verticalPhotos[0].photoUrlBase
          }
          bannerCollectionInstance.collection.push(bannerInstance);
        })
        this.bannerCollections.set([
          ...this.bannerCollections(),
          bannerCollectionInstance
        ]);
      });
      console.log(this.bannerCollections)
    })
  }
}
