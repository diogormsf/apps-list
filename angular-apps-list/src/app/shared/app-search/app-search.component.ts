import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { App } from 'src/app/models/App';
import { PageEvent } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

/**
 * Component that displays the search bar and the list of apps beneath
 *
 * @export
 * @class AppSearchComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css'],
  providers: [AppService]
})
export class AppSearchComponent implements OnInit {

  /**
   * String that represents the text written in the search box
   *
   * @type {string}
   * @memberof AppSearchComponent
   */
  searchValue: string;

  /**
   * String that represents the placeholder in the search box
   *
   * @type {string}
   * @memberof AppSearchComponent
   */
  searchText: string;

  /**
   * String that represents the currently selected category.
   * Null if none is selected
   *
   * @type {string}
   * @memberof AppSearchComponent
   */
  category: string;

  /**
   * Array of apps retrieved from the service call
   *
   * @type {Array<App>}
   * @memberof AppSearchComponent
   */
  apps: Array<App>;

  /**
   * Array of apps that will be displayed in the current page
   *
   * @type {Array<App>}
   * @memberof AppSearchComponent
   */
  pagedApps: Array<App>;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
  ) {
    this.searchText = 'Search by App';
    this.apps = [];

    /*
    * Subscription of the router params that will trigger when the param map
    * suffers any change. In this case when initializing and when any category
    * is added from the left hand side pane
    */
    this.route.paramMap.subscribe(params => {
      if (params.get('category')) {
        this.category = params.get('category');
      }

      /*
      * Service method call to get apps with the current value of the category
      * and search filter even if null
      */
      this.appService.getApps(this.category, this.searchValue).subscribe(
        res => {
          this.apps = res;
          this.pagedApps = this.apps.slice(0, 3);
        },
        err => {
          console.error(err);
        }
      );
    });

  }

  ngOnInit() {
  }

  /**
   * Method triggered when changing page in the list of apps
   *
   * @param {PageEvent} event event with the info about the current
   * page and page size
   * @memberof AppSearchComponent
   */
  pageChanged(event: PageEvent): void {
    console.log(event);
    const iniIndex = event.pageIndex * event.pageSize;
    let finIndex = iniIndex + event.pageSize;
    if (finIndex > this.apps.length) {
      finIndex = this.apps.length;
    }
    this.pagedApps = this.apps.slice(iniIndex, finIndex);
  }

  /**
   * Method triggered when writting in the search box that gets
   * the current value of the text and calls the getApps method
   *
   * @memberof AppSearchComponent
   */
  searchApp(): void {
    this.appService.getApps(this.category, this.searchValue).subscribe(
      res => {
        this.apps = res;
        this.pagedApps = this.apps.slice(0, 3);
      },
      err => {
        console.error(err);
      }
    );
  }

  /**
   * Method to clear the input search box
   *
   * @memberof AppSearchComponent
   */
  clearValue(): void {
    this.searchValue = '';
    this.searchApp();
  }
}
