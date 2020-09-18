import {User} from './user';
import {Proposal} from './proposal';

export interface Prestation {
  id: number;
  startDate: Date;
  endDate: Date;
  customerRating: number;
  providerRating: number;
  delivered: boolean;
  cancelled: boolean;
  valide: boolean;
  customer: User;
  proposal: Proposal;
}
