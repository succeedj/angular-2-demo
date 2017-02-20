import {Routes} from "@angular/router";
import {HousesListComponent} from "./components/houses/houses-list/houses-list.component";
import {HousesListResolverService} from "./resolvers/houses-list-resolver.service";
import {AddHouseComponent} from "./components/houses/add-house/add-house.component";
import {HouseDetailsComponent} from "./components/houses/house-details/house-details.component";

export const ROUTES: Routes =  [
  { path: 'houses/new', component: AddHouseComponent },
  {
    path: 'houses',
    component: HousesListComponent,
    resolve: {
      houses: HousesListResolverService
    }
  },
  { path: 'houses/:id', component: HouseDetailsComponent },
  { path: '', redirectTo: '/houses', pathMatch: 'full'}

]
