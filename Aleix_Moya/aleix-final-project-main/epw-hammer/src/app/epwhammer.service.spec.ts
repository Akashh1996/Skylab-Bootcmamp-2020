/* eslint-disable no-undef */
import { TestBed } from '@angular/core/testing';
import { Gun } from './home';
import { EpwhammerService } from './epwhammer.service';
import { Modifiers } from './DataModifiers';

describe('EpwhammerService', () => {
  let service: EpwhammerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpwhammerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
describe('function choose Sv', () => {
  let service: EpwhammerService;
  let mod: Modifiers;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpwhammerService);
  });
  it('should return normal Sv without modify', () => {
    const RegAp: number = 0;
    const Sv: number = 3;
    const SvI: number = 7;
    const Save: number = 0;
    const SInV: number = 7;
    const ModAp: number = 0;

    const output:number = service.chooseSv(RegAp, Sv, SvI, {
      ...mod, ModAp, Save, SInV,
    });

    expect(output).toEqual(Sv);
  });
  it('should return SvI', () => {
    const RegAp: number = -5;
    const Sv: number = 3;
    const SvI: number = 7;
    const Save: number = 0;
    const SInV: number = 7;
    const ModAp: number = 0;

    const output:number = service.chooseSv(RegAp, Sv, SvI, {
      ...mod, ModAp, Save, SInV,
    });

    expect(output).toEqual(SvI);
  });
  it('should return Sv modified by Ap', () => {
    const RegAp: number = -1;
    const Sv: number = 2;
    const SvI: number = 7;
    const Save: number = 0;
    const SInV: number = 7;
    const ModAp: number = 0;

    const output:number = service.chooseSv(RegAp, Sv, SvI, {
      ...mod, ModAp, Save, SInV,
    });

    expect(output).toEqual((Sv - RegAp));
  });
  it('Checking SvModifier does not alterate below 2', () => {
    const RegAp: number = 0;
    const Sv: number = 2;
    const SvI: number = 7;
    const Save: number = 1;
    const SInV: number = 7;
    const ModAp: number = 0;

    const output:number = service.chooseSv(RegAp, Sv, SvI, {
      ...mod, ModAp, Save, SInV,
    });

    expect(output).toEqual(2);
  });
  it('Checking SvModifier does not alterate above 7', () => {
    const RegAp: number = -5;
    const Sv: number = 4;
    const SvI: number = 7;
    const Save: number = -1;
    const SInV: number = 7;
    const ModAp: number = 0;

    const output:number = service.chooseSv(RegAp, Sv, SvI, {
      ...mod, ModAp, Save, SInV,
    });

    expect(output).toEqual(7);
  });
  it('Checking Invul modifier has preference if lower', () => {
    const RegAp: number = 0;
    const Sv: number = 7;
    const SvI: number = 5;
    const Save: number = 0;
    const SInV: number = 4;
    const ModAp: number = 0;

    const output:number = service.chooseSv(RegAp, Sv, SvI, {
      ...mod, ModAp, Save, SInV,
    });

    expect(output).toEqual(4);
  });
  it('Checking Ap modifier has effect', () => {
    const RegAp: number = -2;
    const Sv: number = 2;
    const SvI: number = 7;
    const Save: number = 0;
    const SInV: number = 7;
    const ModAp: number = -1;

    const output:number = service.chooseSv(RegAp, Sv, SvI, {
      ...mod, ModAp, Save, SInV,
    });

    expect(output).toEqual(Sv - RegAp - ModAp);
  });
});
describe('function Wound test', () => {
  let service: EpwhammerService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpwhammerService);
  });
  it('should return 2+', () => {
    const S: number = 6;
    const T: number = 3;
    const WoundModifier: number = 0;

    const output:number = service.toWound(S, T, WoundModifier);

    expect(output).toEqual(2);
  });
  it('should return 3+', () => {
    const S: number = 5;
    const T: number = 3;
    const WoundModifier: number = 0;

    const output:number = service.toWound(S, T, WoundModifier);

    expect(output).toEqual(3);
  });
  it('should return 4+', () => {
    const S: number = 3;
    const T: number = 3;
    const WoundModifier: number = 0;

    const output:number = service.toWound(S, T, WoundModifier);

    expect(output).toEqual(4);
  });
  it('should return 5+', () => {
    const S: number = 3;
    const T: number = 4;
    const WoundModifier: number = 0;

    const output:number = service.toWound(S, T, WoundModifier);

    expect(output).toEqual(5);
  });
  it('should return 6+', () => {
    const S: number = 2;
    const T: number = 4;
    const WoundModifier: number = 0;

    const output:number = service.toWound(S, T, WoundModifier);

    expect(output).toEqual(6);
  });
  it('should not return lower than 2', () => {
    const S: number = 8;
    const T: number = 4;
    const WoundModifier: number = 1;

    const output:number = service.toWound(S, T, WoundModifier);

    expect(output).toEqual(2);
  });
  it('should not return above than 6', () => {
    const S: number = 2;
    const T: number = 4;
    const WoundModifier: number = -1;

    const output:number = service.toWound(S, T, WoundModifier);

    expect(output).toEqual(6);
  });
});

describe('function estamate Value test', () => {
  let service: EpwhammerService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpwhammerService);
  });
  it('should return 4 when input is x2', () => {
    const val: string = 'x2';

    const output:number = service.estimateVal(val);

    expect(output).toEqual(4);
  });
  it('should return 0 when input is User', () => {
    const val: string = 'User';

    const output:number = service.estimateVal(val);

    expect(output).toEqual(0);
  });
  it('should return 1 as nubmer', () => {
    const val: string = '1';

    const output:number = service.estimateVal(val);

    expect(output).toEqual(1);
  });
  it('should return 6 when input is 3D3', () => {
    const val: string = '3D3';

    const output:number = service.estimateVal(val);

    expect(output).toEqual(6);
  });
  it('should return 3.5', () => {
    const val: string = 'D6';

    const output:number = service.estimateVal(val);

    expect(output).toEqual(3.5);
  });
  it('should return 2', () => {
    const val: string = 'D3';

    const output:number = service.estimateVal(val);

    expect(output).toEqual(2);
  });
  it('should return 7', () => {
    const val: string = '2D6';

    const output:number = service.estimateVal(val);

    expect(output).toEqual(7);
  });
  it('should return 4', () => {
    const val: string = '2D3';

    const output:number = service.estimateVal(val);

    expect(output).toEqual(4);
  });
  it('should return 5', () => {
    const val: string = 'D3 + 3';

    const output:number = service.estimateVal(val);

    expect(output).toEqual(5);
  });
  it('should return 5.5', () => {
    const val: string = 'D6 + 2';

    const output:number = service.estimateVal(val);

    expect(output).toEqual(5.5);
  });
  it('should return 7.5', () => {
    const val: string = 'D6 + 4';

    const output:number = service.estimateVal(val);

    expect(output).toEqual(7.5);
  });
  it('should return number', () => {
    const val: number = Math.random() * 10;

    const output:number = service.estimateVal(val);

    expect(output).toEqual(val);
  });
  it('should return nothing', () => {
    const val: string = 'asfvnaspvnsdovnaofinv`wevnà132r';

    const output:number = service.estimateVal(val);

    expect(output).toBeNaN();
  });
});

describe('function Calculations test', () => {
  let service: EpwhammerService;
  let serviceSpyConfirmSpy: any;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpwhammerService);
    serviceSpyConfirmSpy = spyOn(service, 'estimateVal').and.callThrough();
  });
  it('estimateVal to have been called', () => {
    const NoS: number = 3;
    const woundOn: number = 3;
    const chosenSv: number = 3;
    const hitOn: number = 3;

    service.calculations(NoS, hitOn, woundOn, chosenSv);
    expect(serviceSpyConfirmSpy).toHaveBeenCalled();
  });
  it('all Numbers', () => {
    const NoS: number = 3;
    const woundOn: number = 3;
    const chosenSv: number = 3;
    const hitOn: number = 3;

    const result = service.calculations(NoS, hitOn, woundOn, chosenSv);
    expect(result).toEqual(81);
  });
  it('NoS String', () => {
    const NoS: string = 'D3';
    const woundOn: number = 3;
    const chosenSv: number = 3;
    const hitOn: number = 3;

    const result = service.calculations(NoS, hitOn, woundOn, chosenSv);
    expect(result).toEqual(54);
  });
});

describe('function Calculate Wounds test', () => {
  let service: EpwhammerService;
  let serviceSpyToWound: any;
  let serviceSpyChooseSv: any;
  let serviceSpyCalculations: any;
  let gun: Gun;
  const modifiers: Modifiers | any = {
    Hit: 0,
    Wound: 0,
    Save: 0,
    FnP: 7,
    Damage: 0,
    ModAp: 0,
    SInV: 7,
    rerollHits: 'none',
    rerollWounds: 'none',
    rerollSaved: 'none',
    rerollDamage: 'none',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpwhammerService);
    serviceSpyToWound = spyOn(service, 'toWound').and.callThrough();
    serviceSpyChooseSv = spyOn(service, 'chooseSv').and.callThrough();
    serviceSpyCalculations = spyOn(service, 'calculations').and.callThrough();
  });
  it('toWound is Called', () => {
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const FnP: number = 7;
    const hitingOn: string = '+3';

    service.calculateWounds({ ...gun }, hitingOn, Toughness, Sv, SvInv, FnP, { ...modifiers });
    expect(serviceSpyToWound).toHaveBeenCalled();
  });
  it('chooseSv is Called', () => {
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const FnP: number = 7;
    const hittingOn: string = '+3';

    service.calculateWounds({ ...gun }, hittingOn, Toughness, Sv, SvInv, FnP, { ...modifiers });
    expect(serviceSpyChooseSv).toHaveBeenCalled();
  });
  it('calculations is Called', () => {
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const FnP: number = 7;
    const hittingOn: string = '+3';

    service.calculateWounds({ ...gun }, hittingOn, Toughness, Sv, SvInv, FnP, { ...modifiers });
    expect(serviceSpyCalculations).toHaveBeenCalled();
  });
  it('calculateWounds should return correctly 0.13 when input is melee', () => {
    const S: number | string = 'User';
    const Range: string = 'Melee';
    const Ap: number = -1;
    const NoS: number | string = 1;
    const D: number | string = 1;
    const Toughness: number = 4;
    const Sv: number = 3;
    const SvInv: number = 7;
    const FnP: number = 7;
    const Wound: number = 0;
    const Save: number = 0;
    const hittingOn: string = '+3';

    const result = service.calculateWounds({
      ...gun, S, Ap, NoS, D, Range,
    }, hittingOn, Toughness, Sv, SvInv, FnP, { ...modifiers, Wound, Save });
    expect(result).toEqual(0.13);
  });
  it('damage modifier reduces damage taken', () => {
    const S: number | string = 'User';
    const Range: string = 'Melee';
    const Ap: number = -1;
    const NoS: number | string = 1;
    const D: number | string = 2;
    const Toughness: number = 4;
    const Sv: number = 3;
    const SvInv: number = 7;
    const FnP: number = 7;
    const Wound: number = 0;
    const Damage: number = 1;
    const hittingOn: string = '+3';

    const result = service.calculateWounds({
      ...gun, S, Ap, NoS, D, Range,
    }, hittingOn, Toughness, Sv, SvInv, FnP, { ...modifiers, Wound, Damage });
    expect(result).toEqual(0.13);
  });
  it('damage modifier reduces damage but no below 0', () => {
    const S: number | string = 'User';
    const Range: string = 'Melee';
    const Ap: number = -1;
    const NoS: number | string = 1;
    const D: number | string = 1;
    const Toughness: number = 4;
    const Sv: number = 3;
    const SvInv: number = 7;
    const FnP: number = 7;
    const Wound: number = 0;
    const Damage: number = 1;
    const hittingOn: string = '+3';

    const result = service.calculateWounds({
      ...gun, S, Ap, NoS, D, Range,
    }, hittingOn, Toughness, Sv, SvInv, FnP, { ...modifiers, Wound, Damage });
    expect(result).toEqual(0.13);
  });
  it('calculateWounds should return 0.13', () => {
    const S: number = 4;
    const Ap: number = -1;
    const NoS: number | string = 1;
    const D: number | string = 1;
    const Toughness: number = 4;
    const Sv: number = 3;
    const SvInv: number = 7;
    const FnP: number = 7;
    const Wound: number = 0;
    const Save: number = 0;
    const hittingOn: string = '+3';

    const result = service.calculateWounds({
      ...gun, S, Ap, NoS, D,
    }, hittingOn, Toughness, Sv, SvInv, FnP, { ...modifiers, Wound, Save });
    expect(result).toEqual(0.13);
  });
});
describe('function Calculate Dead test', () => {
  let service: EpwhammerService;
  let serviceSpyToWound: any;
  let serviceSpyChooseSv: any;
  let serviceSpyCalculations: any;
  let gun: Gun;
  const modifiers: Modifiers | any = {
    Hit: 0,
    Wound: 0,
    Save: 0,
    FnP: 7,
    Damage: 0,
    ModAp: 0,
    SInV: 7,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpwhammerService);
    serviceSpyToWound = spyOn(service, 'toWound').and.callThrough();
    serviceSpyChooseSv = spyOn(service, 'chooseSv').and.callThrough();
    serviceSpyCalculations = spyOn(service, 'calculations').and.callThrough();
  });
  it('toWound is Called', () => {
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const wounds: number = 1;
    const FnP: number = 7;
    const Wound: number = 0;
    const Save: number = 0;
    const hittingOn: string = '3+';

    service.calculateDeadModels({ ...gun }, hittingOn, Toughness, Sv, SvInv, FnP, { ...modifiers, Wound, Save }, wounds);
    expect(serviceSpyToWound).toHaveBeenCalled();
  });
  it('chooseSv is Called', () => {
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const wounds: number = 1;
    const FnP: number = 7;
    const Wound: number = 0;
    const Save: number = 0;
    const hittingOn: string = '3+';

    service.calculateDeadModels({ ...gun }, hittingOn, Toughness, Sv, SvInv, FnP, { ...modifiers, Wound, Save }, wounds);
    expect(serviceSpyChooseSv).toHaveBeenCalled();
  });
  it('calculations is Called', () => {
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const wounds: number = 1;
    const FnP: number = 7;
    const Wound: number = 0;
    const Save: number = 0;
    const hittingOn: string = '3+';

    service.calculateDeadModels({ ...gun }, hittingOn, Toughness, Sv, SvInv, FnP, { ...modifiers, Wound, Save }, wounds);
    expect(serviceSpyCalculations).toHaveBeenCalled();
  });
  it('calculateDead should return 0 on T = S', () => {
    const S: number = 4;
    const Ap: number = -1;
    const NoS: number | string = 1;
    const D: number | string = 1;
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const wounds: number = 1;
    const FnP: number = 7;
    const Wound: number = 0;
    const Save: number = 0;
    const hittingOn: string = '3+';

    const result = service.calculateDeadModels({
      ...gun, S, Ap, NoS, D,
    }, hittingOn, Toughness, Sv, SvInv, FnP, { ...modifiers, Wound, Save }, wounds);
    expect(result).toEqual(0);
  });
  it('calculateDead should return 1 on T = S', () => {
    const S: number = 4;
    const Ap: number = -1;
    const NoS: number | string = 6;
    const D: number | string = 1;
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const wounds: number = 1;
    const FnP: number = 7;
    const Wound: number = 0;
    const Save: number = 0;
    const hittingOn: string = '3+';

    const result = service.calculateDeadModels({
      ...gun, S, Ap, NoS, D,
    }, hittingOn, Toughness, Sv, SvInv, FnP, {
      ...modifiers, Wound, Save,
    }, wounds);
    expect(result).toEqual(1);
  });
  it('calculateDead should return 0 T = S, 2+"', () => {
    const S: number = 4;
    const Ap: number = -1;
    const NoS: number | string = 1;
    const D: number | string = 1;
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const wounds: number = 2;
    const FnP: number = 7;
    const Wound: number = 0;
    const Save: number = 0;
    const hittingOn: string = '3+';

    const result = service.calculateDeadModels({
      ...gun, S, Ap, NoS, D,
    }, hittingOn, Toughness, Sv, SvInv, FnP, { ...modifiers, Wound, Save }, wounds);
    expect(result).toEqual(0);
  });

  it('calculateDead should return 0 T > S', () => {
    const S: number = 3;
    const Ap: number = -1;
    const NoS: number | string = 1;
    const D: number | string = 1;
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const wounds: number = 1;
    const FnP: number = 7;
    const Wound: number = 0;
    const Save: number = 0;
    const hittingOn: string = '3+';

    const result = service.calculateDeadModels({
      ...gun, S, Ap, NoS, D,
    }, hittingOn, Toughness, Sv, SvInv, FnP, { ...modifiers, Wound, Save }, wounds);
    expect(result).toEqual(0);
  });

  it('calculateDead should return 1 T < S', () => {
    const S: number = 5;
    const Ap: number = -1;
    const NoS: number | string = 5;
    const D: number | string = 1;
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const wounds: number = 1;
    const FnP: number = 7;
    const Wound: number = 0;
    const Save: number = 0;
    const hittingOn: string = '3+';

    const result = service.calculateDeadModels({
      ...gun, S, Ap, NoS, D,
    }, hittingOn, Toughness, Sv, SvInv, FnP, { ...modifiers, Wound, Save }, wounds);
    expect(result).toEqual(1);
  });
  it('calculateDead D > W', () => {
    const S: number = 5;
    const Ap: number = -1;
    const NoS: number | string = 5;
    const D: number | string = 2;
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const wounds: number = 1;
    const FnP: number = 7;
    const Wound: number = 0;
    const Save: number = 0;
    const SInV: number = 7;
    const ModAp: number = 0;
    const hittingOn: string = '3+';

    const result = service.calculateDeadModels({
      ...gun, S, Ap, NoS, D,
    }, hittingOn, Toughness, Sv, SvInv, FnP, {
      ...modifiers, Wound, Save, ModAp, SInV,
    }, wounds);
    expect(result).toEqual(1);
  });
});

describe('function Faction Average Wounds', () => {
  let service: EpwhammerService;
  let serviceSpyCalculateWounds: any;
  let gun: Gun;
  const guns: Gun[] = [
    {
      name: 'Accelerator Autocannon',
      points: 0,
      Range: 48,
      Type: 'Heavy',
      NoS: 3,
      S: 7,
      Ap: -1,
      D: 2,
      Ability: '',
      profile: '',
      Overcharged: '',
    },
    {
      name: 'Astartes Chainsword',
      points: 0,
      Range: 'Melee',
      Type: 'Melee',
      S: 'User',
      Ap: -1,
      D: 1,
      Ability: '+1 Attack',
      profile: '',
      Overcharged: '',
      NoS: '',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpwhammerService);
    serviceSpyCalculateWounds = spyOn(service, 'calculateWounds').and.callThrough();
  });
  it('calculateWounds is Called', () => {
    const S: number = 5;
    const Ap: number = -1;
    const NoS: number | string = 3;
    const D: number | string = 2;
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const FnP: number = 7;
    const hittingOn: string[] = ['3+', '3+'];

    service.factionAverageWounds([{
      ...gun, S, Ap, NoS, D,
    }], hittingOn, Toughness, Sv, SvInv, FnP);
    expect(serviceSpyCalculateWounds).toHaveBeenCalled();
  });
  it('test it functions correctly', () => {
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const FnP: number = 7;
    const hittingOn: string[] = ['3+', '3+'];

    service.factionAverageWounds(guns, hittingOn, Toughness, Sv, SvInv, FnP);
    expect(serviceSpyCalculateWounds).toHaveBeenCalled();
  });
});
describe('function Faction Average models killed', () => {
  let service: EpwhammerService;
  let serviceSpyCalculateWounds: any;
  let gun: Gun;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpwhammerService);
    serviceSpyCalculateWounds = spyOn(service, 'calculateDeadModels').and.callThrough();
  });
  it('factionAverageModelsKilled is Called', () => {
    const S: number = 5;
    const Ap: number = -1;
    const NoS: number | string = 3;
    const D: number | string = 2;
    const Toughness: number = 4;
    const Sv: number = 4;
    const SvInv: number = 4;
    const FnP: number = 7;
    const wounds: number = 2;
    const hittingOn: string[] = ['3+', '3+'];

    service.factionAverageModelsKilled([{
      ...gun, S, Ap, NoS, D,
    }], hittingOn, Toughness, Sv, SvInv, FnP, wounds);
    expect(serviceSpyCalculateWounds).toHaveBeenCalled();
  });
  it('if total lesser than 0', () => {
    const S: number = 4;
    const Ap: number = 0;
    const NoS: number | string = 1;
    const D: number | string = 1;
    const Toughness: number = 8;
    const Sv: number = 2;
    const SvInv: number = 4;
    const FnP: number = 7;
    const wounds: number = 30;
    const hittingOn: string[] = ['3+', '3+'];

    service.factionAverageModelsKilled([{
      ...gun, S, Ap, NoS, D,
    }], hittingOn, Toughness, Sv, SvInv, FnP, wounds);
    expect(serviceSpyCalculateWounds).toHaveBeenCalled();
  });
});
describe('function setModifiers', () => {
  let service: EpwhammerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpwhammerService);
  });
  it('setModifiers returns new modifiers', () => {
    const newModifiers: Modifiers = {
      Hit: 1,
      Wound: 1,
      Save: -1,
      FnP: 5,
      Damage: 0,
      ModAp: 0,
      SInV: 0,
      rerollHits: 'none',
      rerollWounds: 'none',
      rerollSaved: 'none',
      rerollDamage: 'none',
    };
    service.setModifiers(newModifiers);

    expect(service.currentModifiers).toEqual(newModifiers);
  });
});

describe('determineRerollEffect test', () => {
  let service: EpwhammerService;
  const myModifiers: Modifiers = {
    Hit: 0,
    Wound: 0,
    Save: 0,
    FnP: 7,
    Damage: 0,
    ModAp: 0,
    SInV: 7,
    rerollHits: 'none',
    rerollWounds: 'none',
    rerollSaved: 'none',
    rerollDamage: 'none',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpwhammerService);
  });
  it('testing reroll of 1s', () => {
    myModifiers.rerollWounds = '1s';
    const woundingOn: number = 0.5;
    const result = service.determineRerollEffect(myModifiers.rerollWounds, woundingOn);

    expect(result).toEqual(0.58);
  });
  it('testing no reroll', () => {
    myModifiers.rerollWounds = 'none';
    const woundingOn: number = 0.5;
    const result = service.determineRerollEffect(myModifiers.rerollWounds, woundingOn);

    expect(result).toEqual(0.5);
  });
  it('testing reroll all failed', () => {
    myModifiers.rerollWounds = 'All Failed';
    const woundingOn: number = 0.5;
    const result = service.determineRerollEffect(myModifiers.rerollWounds, woundingOn);

    expect(result).toEqual(0.75);
  });
  it('testing reroll 6s', () => {
    myModifiers.rerollWounds = '6s';
    const woundingOn: number = 0.5;
    const result = service.determineRerollEffect(myModifiers.rerollWounds, woundingOn);

    expect(result).toEqual(0.42);
  });
  it('testing reroll All successfull', () => {
    myModifiers.rerollWounds = 'All Successful';
    const woundingOn: number = 0.5;
    const result = service.determineRerollEffect(myModifiers.rerollWounds, woundingOn);

    expect(result).toEqual(0.25);
  });
  it('testing reroll undefined type of reroll', () => {
    myModifiers.rerollWounds = '<viofdnvo<dco>';
    const woundingOn: number = 0.5;
    const result = service.determineRerollEffect(myModifiers.rerollWounds, woundingOn);

    expect(result).toEqual(0.5);
  });
});

describe('calculateRerollDamage test', () => {
  let service: EpwhammerService;
  const myModifiers: Modifiers = {
    Hit: 0,
    Wound: 0,
    Save: 0,
    FnP: 7,
    Damage: 0,
    ModAp: 0,
    SInV: 7,
    rerollHits: 'none',
    rerollWounds: 'none',
    rerollSaved: 'none',
    rerollDamage: 'none',
  };
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpwhammerService);
  });
  it('testing reroll of number', () => {
    myModifiers.rerollDamage = 'Reroll Favorable';
    const damage: number = 1;
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(1);
  });
  it('testing reroll favorable of 1', () => {
    myModifiers.rerollDamage = 'Reroll Favorable';
    const damage: string = '1';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(1);
  });
  it('testing reroll favorable of D6', () => {
    myModifiers.rerollDamage = 'Reroll Favorable';
    const damage: string = 'D6';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(5.25);
  });
  it('testing reroll favorable of D3', () => {
    myModifiers.rerollDamage = 'Reroll Favorable';
    const damage: string = 'D3';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(3);
  });
  it('testing reroll favorable of 2D6', () => {
    myModifiers.rerollDamage = 'Reroll Favorable';
    const damage: string = '2D6';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(10.5);
  });
  it('testing reroll favorable of 2D3', () => {
    myModifiers.rerollDamage = 'Reroll Favorable';
    const damage: string = '2D3';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(6);
  });
  it('testing reroll favorable of D3 + 3', () => {
    myModifiers.rerollDamage = 'Reroll Favorable';
    const damage: string = 'D3 + 3';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(6);
  });
  it('testing reroll favorable of D6 + 2', () => {
    myModifiers.rerollDamage = 'Reroll Favorable';
    const damage: string = 'D6 + 2';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(7.25);
  });
  it('testing reroll favorable of D6 + 4', () => {
    myModifiers.rerollDamage = 'Reroll Favorable';
    const damage: string = 'D6 + 4';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(9.25);
  });
  it('testing reroll favorable of undefined', () => {
    myModifiers.rerollDamage = 'Reroll Favorable';
    const damage: string = 'asvavmava';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(0);
  });
  it('testing reroll Disfavorable of 1', () => {
    myModifiers.rerollDamage = 'Reroll Disfavorable';
    const damage: string = '1';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(1);
  });
  it('testing reroll Disfavorable of D6', () => {
    myModifiers.rerollDamage = 'Reroll Disfavorable';
    const damage: string = 'D6';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(1.75);
  });
  it('testing reroll Disfavorable of D3', () => {
    myModifiers.rerollDamage = 'Reroll Disfavorable';
    const damage: string = 'D3';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(1);
  });
  it('testing reroll Disfavorable of 2D6', () => {
    myModifiers.rerollDamage = 'Reroll Disfavorable';
    const damage: string = '2D6';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(3.5);
  });
  it('testing reroll Disfavorable of 2D3', () => {
    myModifiers.rerollDamage = 'Reroll Disfavorable';
    const damage: string = '2D3';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(2);
  });
  it('testing reroll Disfavorable of D3 + 3', () => {
    myModifiers.rerollDamage = 'Reroll Disfavorable';
    const damage: string = 'D3 + 3';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(4);
  });
  it('testing reroll Disfavorable of D6 + 2', () => {
    myModifiers.rerollDamage = 'Reroll Disfavorable';
    const damage: string = 'D6 + 2';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(3.75);
  });
  it('testing reroll Disfavorable of D6 + 4', () => {
    myModifiers.rerollDamage = 'Reroll Disfavorable';
    const damage: string = 'D6 + 4';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(5.75);
  });
  it('testing reroll Disfavorable of undefined', () => {
    myModifiers.rerollDamage = 'Reroll Disfavorable';
    const damage: string = 'asvavmava';
    const result = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(0);
  });
  it('testing estimateVal is Called', () => {
    myModifiers.rerollDamage = 'none';
    const serviceSpyConfirmSpy: any = spyOn(service, 'estimateVal').and.callThrough();
    const damage: string = '1';

    service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(serviceSpyConfirmSpy).toHaveBeenCalled();
  });
  it('testing reroll "none" of 1', () => {
    myModifiers.rerollDamage = 'none';
    const damage: string = '1';

    const result:number = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(1);
  });
  it('testing reroll "undefined" of damage', () => {
    myModifiers.rerollDamage = 'asdvavW';
    const damage: string = '1';

    const result:number = service.calculateRerollDamage(myModifiers.rerollDamage, damage);

    expect(result).toEqual(1);
  });
  it('to Hit 4+', () => {
    const myPrecisions = '4+';
    const result = service.toHit(myPrecisions, 0);
    expect(result).toEqual(4);
  });
  it('to Hit 2+', () => {
    const myPrecisions = '4+';
    const result = service.toHit(myPrecisions, 0);
    expect(result).toEqual(4);
  });
  it('to Hit 5+', () => {
    const myPrecisions = '5+';
    const result = service.toHit(myPrecisions, 0);
    expect(result).toEqual(5);
  });
  it('to Hit 6+', () => {
    const myPrecisions = '6+';
    const result = service.toHit(myPrecisions, 0);
    expect(result).toEqual(6);
  });
  it('to Hit 2+ with positive modifier cannot be modified under 2', () => {
    const myPrecisions = '2+';
    const result = service.toHit(myPrecisions, 1);
    expect(result).toEqual(2);
  });
  it('to Hit 6+ with negative modifier cannot be modified over 6', () => {
    const myPrecisions = '6+';
    const result = service.toHit(myPrecisions, -1);
    expect(result).toEqual(6);
  });
  it('to Hit 3+ with negative modifier expected 4+', () => {
    const myPrecisions = '3+';
    const result = service.toHit(myPrecisions, -1);
    expect(result).toEqual(4);
  });
  describe('getModifiers', () => {
    it('test getter', () => {
      const mockCurrentModifiers: Modifiers | any = {
        Hit: 0,
        Wound: 0,
        Save: 0,
        FnP: 7,
        Damage: 0,
        ModAp: 0,
        SInV: 7,
        rerollHits: 'none',
        rerollWounds: 'none',
        rerollSaved: 'none',
        rerollDamage: 'none',
      };
      const alsoMyModifiers = service.modifiers;

      expect(alsoMyModifiers).toEqual(mockCurrentModifiers);
    });
  });
});
