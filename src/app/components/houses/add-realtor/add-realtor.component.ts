import {Component, OnInit, EventEmitter, Output, Inject} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Realtor} from "../../../models/house.model";
import { valRange } from "../../../common/form-validator";
import { TOASTR_TOKEN, Toastr } from '../../../common/toastr.service';
import {HouseService} from "../../../services/house.service";

@Component({
  selector: 'app-add-realtor',
  templateUrl: './add-realtor.component.html',
  styleUrls: ['./add-realtor.component.css']
})
export class AddRealtorComponent implements OnInit {

  @Output() saveNewRealtor = new EventEmitter();
  @Output() cancelAddNewRealtor = new EventEmitter();

  // using a model based form
  newRealtorForm: FormGroup;
  name: FormControl;
  company: FormControl;
  licenseNumber: FormControl;

  constructor(@Inject(TOASTR_TOKEN) private toastr: Toastr, private houseService: HouseService ){}

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.company = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.licenseNumber = new FormControl('', [Validators.required, valRange])

    this.newRealtorForm = new FormGroup({
      name: this.name,
      company: this.company,
      licenseNumber: this.licenseNumber
    })
  }

  saveRealtor(values) {
    let realtor:Realtor = {
      id: undefined,
      name: values.name,
      company: values.company,
      licenseNumber: values.licenseNumber

    }
    this.toastr.success('successfully saved');
    this.saveNewRealtor.emit(realtor);
  }

  cancel() {
    this.cancelAddNewRealtor.emit();
  }

}
