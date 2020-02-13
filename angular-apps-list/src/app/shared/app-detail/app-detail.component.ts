import { Component, OnInit, Input } from '@angular/core';
import { App } from 'src/app/models/App';

/**
 * Component that represents an app card within the list of apps
 *
 * @export
 * @class AppDetailComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent implements OnInit {

  /**
   * The input of the components consisting of the app to display
   *
   * @type {App}
   * @memberof AppDetailComponent
   */
  @Input() app: App;

  constructor() { }

  ngOnInit() {
  }

}
