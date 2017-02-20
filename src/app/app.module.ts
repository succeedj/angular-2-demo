import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HousesListComponent } from './components/houses/houses-list/houses-list.component';
import { HouseDetailsComponent } from './components/houses/house-details/house-details.component';
import { AddHouseComponent } from './components/houses/add-house/add-house.component';
import { HouseSnapshotComponent } from './components/houses/house-snapshot/house-snapshot.component';
import {HouseService} from "./services/house.service";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./routes";
import {HousesListResolverService} from "./resolvers/houses-list-resolver.service";
import { AddRealtorComponent } from './components/houses/add-realtor/add-realtor.component';
import { RealtorListComponent } from './components/houses/realtor-list/realtor-list.component';

import {TOASTR_TOKEN, Toastr} from './common/toastr.service';
import { ModalDirective } from './common/modal.directive';
import { JQ_TOKEN } from './common/jQuery.service';
import { AppModalComponent } from './common/app-modal/app-modal.component';

declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HousesListComponent,
    HouseDetailsComponent,
    AddHouseComponent,
    HouseSnapshotComponent,
    AddRealtorComponent,
    RealtorListComponent,
    ModalDirective,
    AppModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    HouseService,
    HousesListResolverService,
    { provide: TOASTR_TOKEN, useValue: toastr},
    { provide: JQ_TOKEN, useValue: jQuery },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
