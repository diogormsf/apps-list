import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css'],
  providers: [CategoryService]
})
export class CategoriesListComponent implements OnInit {
  categories: Array<string>;

  constructor(private categoryService: CategoryService) {
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
