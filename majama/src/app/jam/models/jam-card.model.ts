import { Address } from './address.model';

export interface JamCard {
  id: string;
  date: Date;
  place: string;
  address: Address;
  timeStart: string;
  timeStop: string;
}
