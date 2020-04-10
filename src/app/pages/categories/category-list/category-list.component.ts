import { Component } from '@angular/core';

import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';

import { BaseResourceListComponent } from 'src/app/shared/components/lists/base-resource-list.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends BaseResourceListComponent<Category> {

  constructor(protected categoryService: CategoryService) {
    super(categoryService);
   }

}
