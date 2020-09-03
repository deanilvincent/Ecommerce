import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {CategoryService} from './category-service';
import { Category } from './category';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit, OnDestroy {

  Category: Category;
  categoryForm: FormGroup;
  errorMessage: string;
  private sub: Subscription;
  constructor(private  route: ActivatedRoute,
              private categoryService: CategoryService,
              private fb: FormBuilder) { }

  ngOnInit(): void {

    this.categoryForm = this.fb.group({
      categoryName: ['', Validators.required]
    });

    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getCategory(id);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  displayCategory(category: Category): void
  {
    if (this.categoryForm)
    {
      this.categoryForm.reset();
    }
    this.Category = category;
    this.categoryForm.patchValue({
      categoryName: category.categoryName
    });
    console.log(this.categoryForm.get('categoryName').value);
  }

  getCategory(id: number): void{
    this.categoryService.getCategory(id).subscribe({
      next: (category: Category) => this.displayCategory(category)
    });
  }

  getBack(): void{

  }

  save(): void{

  }

  delete(): void{

  }

}
