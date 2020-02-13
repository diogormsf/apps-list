import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

/**
 * Component that displays all the categories from
 * the existing apps sorted alphabetically right from the server
 *
 * @export
 * @class CategoriesListComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
  providers: [CategoryService]
})
export class CategoriesListComponent implements OnInit {

  /**
   * Array of categories retrieved from the service
   *
   * @type {Array<string>}
   * @memberof CategoriesListComponent
   */
  categories: Array<string>;

  constructor(private categoryService: CategoryService) {
    /*
    * Service call to get all categories and display them on the screen
    */
    this.categoryService.getAllCategories().subscribe(
      elem => {
        this.categories = elem;
      },
      err => {
        console.error(err);
      }
    );
  }

  ngOnInit() {
  }

}
