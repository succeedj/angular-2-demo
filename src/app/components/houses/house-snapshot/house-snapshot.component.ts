import {Component, OnInit, Input} from '@angular/core';
import {House} from "../../../models/house.model";

@Component({
  selector: 'app-house-snapshot',
  templateUrl: './house-snapshot.component.html',
  styleUrls: ['./house-snapshot.component.css']
})
export class HouseSnapshotComponent implements OnInit {

  @Input() house: House; // we are passing this house from the house-list component
  constructor() { }

  ngOnInit() {
  }

}
