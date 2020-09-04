import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Category } from '../models/category.model';

export class CategoryData implements InMemoryDbService {
    createDb(): { categories: Category[] } {
        const categories = [
            {
                id: 1,
                categoryName: 'Shoes'
            },
            {
                id: 2,
                categoryName: 'Apparrel'
            },
            {
                id: 3,
                categoryName: 'Bag'
            },
            {
                id: 4,
                categoryName: 'Hat'
            },
            {
                id: 5,
                categoryName: 'Watch'
            }
        ];
        return { categories };
    }
}
