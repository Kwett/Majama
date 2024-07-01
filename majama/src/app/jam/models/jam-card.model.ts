export interface JamCard {
  '@id': string;
  '@type': string;
  place: {
    '@id': string;
    '@type': string;
    name: string;
    addressNumber: number;
    road: string;
    city: string;
    background: string;
  };
  timeStart: Date;
  timeEnd: Date;
}
