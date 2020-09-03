import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CategoryService {
    private categoryUrl = 'api/categories';

    constructor(private http: HttpClient) { }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(this.categoryUrl);
    }

    getCategory(id: number): Observable<Category> {
        const tempUrl = `${this.categoryUrl}/${id}`;
        return this.http.get<Category>(tempUrl);
    }
}
