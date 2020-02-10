import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const CATEGORIES = ['Channels', 'Dialer', 'Optimization', 'Reporting', 'Voice Analytics'];

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getAllCategories(): Observable<Array<string>> {
    return of(CATEGORIES);
  }
}
