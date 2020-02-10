import { Component, OnInit, Input } from '@angular/core';
import { App } from 'src/app/models/App';

@Component({
  selector: 'app-app-detail',
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent implements OnInit {
  @Input() app: App;

  constructor() { }

  ngOnInit() {
  }

}
