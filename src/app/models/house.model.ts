export class House {
  id: number;
  description: string;
  type: string;
  price: number;
  imageUrl: string;
  location?: {
    address: string,
    city: string,
    state: string
  }
  realtors?: Realtor[]
}

export class Realtor {
  id: number;
  name: string;
  company: string;
  licenseNumber: number;
}


