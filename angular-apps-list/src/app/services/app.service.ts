import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { App } from '../models/App';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

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
 * regarding the App object
 *
 * @export
 * @class AppService
 */
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  /**
   * Method that given or not a category or a small text returns the apps
   * filter by those two parameters. Both parameters are optional and if
   * none of them is present all apps are returned.
   *
   * @param {string} [category] the selected category from the left pane of the app
   * @param {string} [searchValue] the text inserted by the user in the search bar at
   * the top of the app
   * @returns {Observable<Array<App>>}
   * @memberof AppService
   */
  getApps(category?: string, searchValue?: string): Observable<Array<App>> {
    const requestBody = {};

    // Checks if there is any category sent
    if (category != null && category.trim() !== '') {
      Object.assign(requestBody, { category });
    }

    // Checks if there is any search filter sent
    if (searchValue != null && searchValue.trim() !== '') {
      Object.assign(requestBody, { searchFilter: searchValue });
    }

    return this.http.post(environment.nodeUrl + '/getApps', requestBody, httpOptions)
    .pipe(
      map(resp => {
        let apps = [];
        apps = apps.concat(resp['message'] as Array<any>);

        // Mapps every element in the response to an App model object
        apps = apps.map(elem => new App().deserialize(elem));

        return apps;
      })
    );
  }
}
