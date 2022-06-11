import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/tag.model';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string = 'cemter'

  tags?: Tag[];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {

    if(!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
  }

}
