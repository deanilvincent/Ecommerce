import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from '../components/category/category-list/category-list.component';
import { CategoryEditComponent } from '../components/category/category-edit/category-edit.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CategoryData } from '../data/category.data';

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(CategoryData),
    RouterModule.forChild([
      { path: 'categories', component: CategoryListComponent },
      { path: 'categories/:id/edit', component: CategoryEditComponent }
    ])
  ]
})
export class CategoryModule { }
