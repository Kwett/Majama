import { Address } from './address.model';

export interface JamCard {
  id: string;
  placeId: string;
  date: Date;
  place: string;
  address: Address;
  timeStart: string;
  timeStop: string;
}
