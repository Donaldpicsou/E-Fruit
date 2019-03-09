import { Component, OnInit } from '@angular/core';
import {Client} from '../model/fruits';
import { _CLIENTS_} from '../model/list-fruits';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Clients = _CLIENTS_;
  introduction = "Annuaire Entreprise"

  constructor() { }

  ngOnInit() {
  }

}
