import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Category } from '../../services/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent implements OnInit {

  @Input() category: Category;

  constructor() { }

  ngOnInit(): void {
  }

}
