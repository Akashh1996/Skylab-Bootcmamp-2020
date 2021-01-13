import { Pet } from './pet';

export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favourite: Pet[];
}
