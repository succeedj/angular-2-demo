import {Component, OnInit, Input} from '@angular/core';
import {Realtor} from "../../../models/house.model";

@Component({
  selector: 'app-realtor-list',
  templateUrl: './realtor-list.component.html',
  styleUrls: ['./realtor-list.component.css']
})
export class RealtorListComponent implements OnInit {

  @Input() realtors: Realtor[];

  constructor() { }

  ngOnInit() {
  }

}
