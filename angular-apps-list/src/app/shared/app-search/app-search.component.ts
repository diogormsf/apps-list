import { AppService } from './../../services/app.service';
import { Component, OnInit } from '@angular/core';
import { App } from 'src/app/models/App';
import { PageEvent } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css'],
  providers: [AppService]
})
export class AppSearchComponent implements OnInit {
  searchValue: string;
  searchText: string;

  category: string;

  apps: Array<App>;
  pagedApps: Array<App>;

  constructor(
    private appService: AppService,
    private route: ActivatedRoute,
  ) {
    this.searchText = 'Search by App';
    this.apps = [];
    this.route.paramMap.subscribe(params => {
      if (params.get('category')) {
        this.category = params.get('category');
      }

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

  pageChanged(event: PageEvent): void {
    console.log(event);
    const iniIndex = event.pageIndex * event.pageSize;
    let finIndex = iniIndex + event.pageSize;
    if (finIndex > this.apps.length) {
      finIndex = this.apps.length;
    }
    this.pagedApps = this.apps.slice(iniIndex, finIndex);
  }

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

  clearValue(): void {
    this.searchValue = '';
    this.searchApp();
  }
}
