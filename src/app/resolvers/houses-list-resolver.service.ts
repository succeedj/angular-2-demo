import { Injectable } from '@angular/core';
import {HouseService} from "../services/house.service";

@Injectable()
export class HousesListResolverService {

  constructor(private houseService: HouseService) { }

  resolve() {
    return this.houseService.getHouses().map(houses => houses);
  }

}
