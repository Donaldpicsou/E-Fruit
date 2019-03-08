import { Component, OnInit } from '@angular/core';
import {Fruits} from '../model/fruits';
import {_FRUITS_} from '../model/list-fruits';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  fruits = _FRUITS_;
  introduction = "Liste des Fruits"

  constructor() { }

  ngOnInit() {
  }

}
