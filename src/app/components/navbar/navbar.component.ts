import { Component, OnInit } from '@angular/core';
import {Realtor} from "../../models/house.model";
import {HouseService} from "../../services/house.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  searchTerm: string ="";
  foundRealtors: Realtor[];

  constructor(private houseService: HouseService) { }

  searchRealtors(searchTerm) {
    this.houseService.searchRealtors(searchTerm).subscribe(
      realtors => {
        this.foundRealtors = realtors;
      }
    )
  }

}
