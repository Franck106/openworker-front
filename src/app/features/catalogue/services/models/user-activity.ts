import {Proposal} from './proposal';
import {Prestation} from './prestation';

export interface UserActivity {
  userProposals: Proposal[];
  userPrestations: Prestation[];
  userDemands: Prestation[];
}
