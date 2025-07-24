import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  http = inject(HttpClient);
  getEverythingFromApi() {
    return this.http.get(API_URL);
  }
}
