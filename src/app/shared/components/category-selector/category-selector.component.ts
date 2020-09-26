import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CatalogueService} from '../../../features/catalogue/services/catalogue.service';
import {Observable} from 'rxjs';
import {Category} from '../../../features/catalogue/services/models/category';
import {tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-selector',
  templateUrl: './category-selector.component.html',
  styleUrls: ['./category-selector.component.css']
})
export class CategorySelectorComponent implements OnInit {
  categories$: Observable<Category[]>;

  subCategories: Category[];

  activeCategories: number[] = [];

  activeParent: number;

  @Output()
  categoryChanged = new EventEmitter<Category[]>();

  constructor(private catalogueService: CatalogueService,
              private route: ActivatedRoute) {
    this.categories$ = catalogueService.getCategories().pipe(
      tap(categories => {
        const currentMainCategoryId = parseInt(this.route.snapshot.paramMap.get('id') || '1', 10);
        const currentMainCategory = categories.find(cat => cat.id === currentMainCategoryId) || categories[0];
        const sub = currentMainCategory?.categories  || [];
        this.activeCategories = [currentMainCategoryId, ...sub.map(c => c.id)];
        this.subCategories = sub;
      })
    );
  }

  ngOnInit(): void {
  }

  toggleCategory(category: Category): void {
    this.activeParent = category.id;
    const sub = category.categories || [];
    this.subCategories = sub;
    this.activeCategories = [category.id, ...sub.map(c => c.id)];
    this.categoryChanged.emit(this.subCategories);
  }

  toggleSubCategory(category: Category): void {
    this.activeCategories = [category.id, this.activeParent];
    this.categoryChanged.emit([category]);
  }

  isToggled(category: Category): boolean {
    return this.activeCategories.includes(category.id);
  }
}
