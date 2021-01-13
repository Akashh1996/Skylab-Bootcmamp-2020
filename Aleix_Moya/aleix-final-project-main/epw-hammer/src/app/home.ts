import { basicStats } from './DataBasicStats';
import { GunProfile } from './DataGunProfile';

export interface Gun {
    name: string,
    Range: (number | string),
    Type: string,
    NoS: (number | string),
    S: (number | string),
    Ap: (number | string),
    D: (number | string),
    Ability: string,
    Overcharged: (basicStats | string),
    profile: (GunProfile | string),
    points: (number | string),
  }
