import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http: HttpClient) { }

  getGalleries(): Observable<any> {
    return this.http.get('/api/galleries');
  }

  getGallery(id: any): Observable<any> {
    return this.http.get(`/api/galleries/${id}`);
  }
}
