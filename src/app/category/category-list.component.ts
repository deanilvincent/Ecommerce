import { Component, OnInit } from '@angular/core';
import {CategoryService} from './category-service';
import { Category } from './category';

@Component({
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(
      {
        next: categories => this.categories = categories
      }
    );
  }

}
