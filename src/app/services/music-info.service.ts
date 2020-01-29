import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { MusicInfo } from '../models/music';

@Injectable({
  providedIn: 'root'
})
export class MusicInfoService {

  baseUrl = 'http://localhost:4200/assets/data.json';
  constructor(private http: HttpClient) { }

  getMusicInfo() {
    return this.http.get(this.baseUrl);
  }

}
