import {Injectable, EventEmitter} from '@angular/core';
import {House, Realtor} from "../models/house.model";
import {Observable, Subject} from "rxjs";

@Injectable()
export class HouseService {

  // test change
  getHouses(): Observable<House[]> {
    let subject = new Subject<House[]>(); // a subject is a type of an observable which can be subscribed to
    setTimeout(() => { // setTimeout to simulate an api call
      subject.next(HOUSES);
      subject.complete();
    }, 1000)
    return subject;
  }

  getHouse(id: number): House {
    return HOUSES.find(house => house.id === id);
  }

  updateHouse(house) {
    let index = HOUSES.findIndex(x => x.id = house.id);
    HOUSES[index] = house;
  }

  searchRealtors(searchTerm: string) {
    var term = searchTerm.toLocaleLowerCase();
    var results: Realtor[] = [];

    HOUSES.forEach(house => {
      var matchingRealtors = house.realtors.filter(realtor => realtor.name.toLocaleLowerCase().indexOf(term) > -1);
      matchingRealtors = matchingRealtors.map((realtor:any) => {
        realtor.houseId = house.id;
        return realtor;
      })
      results = results.concat(matchingRealtors);
    })

    var emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results);
    }, 100);
    return emitter;
  }

}

const HOUSES: House[] = [
  {
    id: 1,
    description: '4 Bedroomed stylish ranch',
    type: 'ranch',
    price: 3500000,
    imageUrl: '',
    location: {
      address: '123 Front Street',
      city: 'Plano',
      state: 'TX'
    },
    realtors: [
      {
        id: 1,
        name: 'Jane Doe',
        company: 'Company A',
        licenseNumber: 550
      },{
        id: 2,
        name: 'Jimmy Doe',
        company: 'ABC Realtors',
        licenseNumber: 808
      }
    ]
  },
  {
    id: 2,
    description: 'Beautiful Single Family Home',
    type: 'single family',
    price: 2500000,
    imageUrl: '',
    location: {
      address: '1050 Main Street',
      city: 'Dallas',
      state: 'TX'
    },
    realtors: [
      {
        id: 1,
        name: 'Pete Doe',
        company: 'Company B',
        licenseNumber: 785
      },
      {
        id: 2,
        name: 'Mary Smith',
        company: 'CD Realtors',
        licenseNumber: 892
      }
    ]
  },
  {
    id: 3,
    description: '8 Bedroomed stylish victorian mansion',
    type: 'victorian',
    price: 15000000,
    imageUrl: '',
    location: {
      address: '850 Alum Street',
      city: 'Detroit',
      state: 'MI'
    },
    realtors: [
      {
        id: 1,
        name: 'Karen Doe',
        company: 'Company E',
        licenseNumber: 690
      }
    ]
  }
]
