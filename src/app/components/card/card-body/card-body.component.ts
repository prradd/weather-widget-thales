import { Component, OnInit } from '@angular/core';
import CityList from "../../CityList";
import {ICity} from "../../types";

@Component({
  selector: 'app-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class CardBodyComponent implements OnInit {

  cities: Array<ICity> = CityList;

  constructor() { }

  ngOnInit(): void {
  }

}
