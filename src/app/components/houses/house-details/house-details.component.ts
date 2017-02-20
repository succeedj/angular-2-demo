import { Component, OnInit } from '@angular/core';
import {House, Realtor} from "../../../models/house.model";
import {HouseService} from "../../../services/house.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  house: House;
  addMode: boolean;

  constructor(private houseService: HouseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.house = this.houseService.getHouse(+params['id']);
    })
  }

  addRealtor() {
    this.addMode = true;
  }

  saveNewRealtor(realtor:Realtor) {
    const nextId = Math.max.apply(null, this.house.realtors.map(h => h.id));
    realtor.id = nextId + 1;
    this.house.realtors.push(realtor);
    this.houseService.updateHouse(this.house);
  }

}
