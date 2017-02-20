import { Component, OnInit } from '@angular/core';
import {House} from "../../../models/house.model";
import {HouseService} from "../../../services/house.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-houses-list',
  templateUrl: './houses-list.component.html',
  styleUrls: ['./houses-list.component.css']
})
export class HousesListComponent implements OnInit {

  houses: House[];

  constructor(private houseService: HouseService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.houses = this.route.snapshot.data['houses'];
  }

}
