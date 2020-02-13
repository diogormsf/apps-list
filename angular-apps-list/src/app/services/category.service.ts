import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  })
};

/**
 * Service class to house all connections to the backend
 * regarding the the categories of an App
 *
 * @export
 * @class CategoryService
 */
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  /**
   * Method that returns all categories across all apps
   *
   * @returns {Observable<Array<string>>}
   * @memberof CategoryService
   */
  getAllCategories(): Observable<Array<string>> {
    return this.http.post(environment.nodeUrl + '/getCategories', {}, httpOptions)
      .pipe(
        map(resp => resp['categories'])
      );
  }
}
