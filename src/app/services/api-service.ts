import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient);
  getDataForCarouselFromApi() {
  return this.http.get<any>(API_URL).pipe(
    map(json => json.data.category.frontPage.filter((item:any) => item.highTimeline)),
    catchError(err => {
      console.error('API error occurred', err);
      return [];
    })
  );
}
}
