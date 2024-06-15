import { Address } from './address.model';

export interface JamCard {
  date: Date;
  place: string;
  address: Address;
  timeStart: string;
  timeStop: string;
}
