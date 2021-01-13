/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { AverageChosenComponent } from './average-chosen.component';
import { EpwhammerService } from '../epwhammer.service';
import { IssueService } from '../issue.service';
import { MEQ } from '../mockEpwhammer';
import { Gun } from '../home';

class dialogMock {
  open() {
    return {
      afterClosed: () => of({}),
    };
  }
}

describe('Average Chosen openModal', () => {
  let component: AverageChosenComponent;
  let fixture: ComponentFixture<AverageChosenComponent>;
  let issueService : IssueService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy};
  let dialog: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AverageChosenComponent],
      imports: [MatDialogModule],
      providers: [
        IssueService,
        { provide: MatDialog, useClass: dialogMock },
        { provide: HttpClient, useValue: httpClientSpy }],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageChosenComponent);
    component = fixture.componentInstance;
    dialog = TestBed.inject(MatDialog);
    fixture.detectChanges();
  });
  it('should open the  dialog', async () => {
    const spy = spyOn(dialog, 'open').and.callThrough();
    component.openModal();
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});

describe('AverageChosenComponent getters', () => {
  let component: AverageChosenComponent;
  let fixture: ComponentFixture<AverageChosenComponent>;
  let service: EpwhammerService;
  let issueService : IssueService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy};
  const profileWithSpaces = {
    name: 'Doomsday Blaster',
    profile: {
      Low_Power: {
        Range: 24,
        Type: 'Heavy',
        NoS: 'D6',
        S: 8,
        Ap: -2,
        D: 'D3',
        Ability: 'Blast',
      },
      High_Power: {
        Range: 48,
        Type: 'Heavy',
        NoS: 'D6',
        S: 10,
        Ap: -5,
        D: 'D6',
        Ability: 'Blast. The bearer must remain stationary',
      },
    },
    Ability: 'Choose one of the following profiles',
    points: 0,
  };
  const profileGun = {
    name: 'Astartes Grenade Launcher',
    points: 5,
    Range: 30,
    Type: 'Assault',
    profile: {
      frag: {
        NoS: 'D6',
        S: 3,
        Ap: 0,
        D: 1,
        Ability: 'Blast',
      },
      krak: {
        NoS: 1,
        S: 6,
        Ap: -1,
        D: 'D3',
        Ability: '',
      },
    },
    Ability: '',
  };
  const meltadGun = {
    name: 'Multi-melta',
    points: 0,
    Ability: '',
    melta: {
      'no-melta': {
        Range: 24,
        Type: 'Heavy',
        NoS: 2,
        S: 8,
        Ap: -4,
        D: 'D6',
        Ability: '',
      },
      'melta-range': {
        Range: 12,
        Type: 'Heavy',
        NoS: 2,
        S: 8,
        Ap: -4,
        D: 'D6 + 2',
        Ability: '',
      },
    },
  };
  const overchargedGun = {
    name: 'Assault Plasma Incinerator',
    points: 12,
    Range: 24,
    Type: 'Assault',
    NoS: 3,
    S: 6,
    Ap: -4,
    D: 1,
    Overcharged: {
      S: 7,
      Ap: -4,
      D: 2,
      Ability: '1 Mortal wound on 1s to hit',
    },
    Ability: '',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AverageChosenComponent],
      imports: [HttpClientTestingModule],
      providers: [
        IssueService,
        { provide: MatDialog, useValue: {} },
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageChosenComponent);
    component = fixture.componentInstance;
    issueService = new IssueService(httpClientSpy as any);
    fixture.detectChanges();
  });

  it('should get ap 0 correctly', () => {
    component.selectedGun.Ap = 0;
    const mockname = component.armourPenetration;
    expect(mockname).toEqual('0');
  });

  it('should get Points 0 correctly', () => {
    component.selectedGun.points = 0;
    const mockname = component.points;
    expect(mockname).toEqual('0');
  });

  it('should get Points 12 correctly', () => {
    component.selectedGun = overchargedGun;
    const mockname = component.points;
    expect(mockname).toEqual(12);
  });

  it('should get Points undefined correctly', () => {
    component.selectedGun.points = null;
    const mockname = component.points;
    expect(mockname).toEqual('');
  });

  it('should get Overcharge correctly', () => {
    component.selectedGun = overchargedGun;
    const mockname = component.overcharged;
    expect(mockname).toEqual('Overcharged');
  });

  it('should get Overcharge S correctly', () => {
    component.selectedGun = overchargedGun;
    const mockname = component.overchargedStrength;
    expect(mockname).toEqual(7);
  });

  it('should get Overcharge Ap correctly', () => {
    component.selectedGun = overchargedGun;
    const mockname = component.overchargedAP;
    expect(mockname).toEqual(-4);
  });

  it('should get Overcharge D correctly', () => {
    component.selectedGun = overchargedGun;
    const mockname = component.overchargedD;
    expect(mockname).toEqual(2);
  });
  it('should get Overcharge Ability correctly', () => {
    component.selectedGun = overchargedGun;
    const mockname = component.overchargedAbility;
    expect(mockname).toEqual('1 Mortal wound on 1s to hit');
  });
  it('should get melta gun profile correctly', () => {
    component.selectedGun = meltadGun;
    const mockname = component.getMeltaGunProfile(1);
    expect(mockname).toEqual('melta-range');
  });
  it('should get melta gun range correctly', () => {
    component.selectedGun = meltadGun;
    const mockname = component.getMeltaGunRange(1);
    expect(mockname).toEqual(12);
  });
  it('should get melta gun Type correctly', () => {
    component.selectedGun = meltadGun;
    const mockname = component.getMeltaGunType(1);
    expect(mockname).toEqual('Heavy');
  });
  it('should get melta gun NoS correctly', () => {
    component.selectedGun = meltadGun;
    const mockname = component.getMeltaGunNoS(1);
    expect(mockname).toEqual(2);
  });
  it('should get melta gun S correctly', () => {
    component.selectedGun = meltadGun;
    const mockname = component.getMeltaGunS(1);
    expect(mockname).toEqual(8);
  });
  it('should get melta gun Ap correctly', () => {
    component.selectedGun = meltadGun;
    const mockname = component.getMeltaGunAp(1);
    expect(mockname).toEqual(-4);
  });
  it('should get melta gun D correctly', () => {
    component.selectedGun = meltadGun;
    const mockname = component.getMeltaGunD(1);
    expect(mockname).toEqual('D6 + 2');
  });
  it('should get Profile correctly', () => {
    component.selectedGun = profileGun;
    const mockname = component.gunProfile(0);
    expect(mockname).toEqual('frag');
  });
  it('should get Profile with spaces correctly', () => {
    component.selectedGun = profileWithSpaces;
    const mockname = component.gunProfile(0);
    expect(mockname).toEqual('Low Power');
  });
  it('should get Profile Range correctly', () => {
    component.selectedGun = profileWithSpaces;
    const mockname = component.gunProfileRange(0);
    expect(mockname).toEqual(24);
  });
  it('should get Profile Type correctly', () => {
    component.selectedGun = profileWithSpaces;
    const mockname = component.gunProfileType(0);
    expect(mockname).toEqual('Heavy');
  });
  it('should get Profile NoS correctly', () => {
    component.selectedGun = profileGun;
    const mockname = component.gunProfileNoS(0);
    expect(mockname).toEqual('D6');
  });
  it('should get Profile S correctly', () => {
    component.selectedGun = profileGun;
    const mockname = component.gunProfileStrength(0);
    expect(mockname).toEqual(3);
  });
  it('should get Profile Ap correctly', () => {
    component.selectedGun = profileGun;
    const mockname = component.gunProfileAp(0);
    expect(mockname).toEqual(0);
  });
  it('should get Profile Damage correctly', () => {
    component.selectedGun = profileGun;
    const mockname = component.gunProfileDamage(0);
    expect(mockname).toEqual(1);
  });
  it('should get Profile Ability correctly', () => {
    component.selectedGun = profileWithSpaces;
    const mockname = component.gunProfileAbility(1);
    expect(mockname).toEqual('Blast. The bearer must remain stationary');
  });
});

describe('calculate Wounds', () => {
  let component: AverageChosenComponent;
  let fixture: ComponentFixture<AverageChosenComponent>;
  let service: EpwhammerService;
  let issueService : IssueService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy};
  const overchargedGun = {
    name: 'Assault Plasma Incinerator',
    points: 0,
    Range: 24,
    Type: 'Assault',
    NoS: 3,
    S: 6,
    Ap: -4,
    D: 1,
    Overcharged: {
      S: 7,
      Ap: -4,
      D: 2,
      Ability: '1 Mortal wound on 1s to hit',
    },
    Ability: '',
  };
  const meltadGun = {
    name: 'Multi-melta',
    points: 0,
    Ability: '',
    melta: {
      'no-melta': {
        Range: 24,
        Type: 'Heavy',
        NoS: 2,
        S: 8,
        Ap: -4,
        D: 'D6',
        Ability: '',
      },
      'melta-range': {
        Range: 12,
        Type: 'Heavy',
        NoS: 2,
        S: 8,
        Ap: -4,
        D: 'D6 + 2',
        Ability: '',
      },
    },
  };
  const profileGun = {
    name: 'Astartes Grenade Launcher',
    points: 5,
    Range: 30,
    Type: 'Assault',
    profile: {
      frag: {
        NoS: 'D6',
        S: 3,
        Ap: 0,
        D: 1,
        Ability: 'Blast',
      },
      krak: {
        NoS: 1,
        S: 6,
        Ap: -1,
        D: 'D3',
        Ability: '',
      },
    },
    Ability: '',
  };
  const marineEquivalent = MEQ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AverageChosenComponent],
      imports: [HttpClientTestingModule],
      providers: [
        IssueService,
        { provide: MatDialog, useValue: {} },
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageChosenComponent);
    component = fixture.componentInstance;
    issueService = new IssueService(httpClientSpy as any);
    fixture.detectChanges();
  });

  it('calculate overcharged wounds overcharged gun is selected', () => {
    component.selectedGun = overchargedGun;
    const total = component.calculateOverchargedWounds(marineEquivalent);
    expect(total).toEqual(2.01);
  });

  it('calculate profile wounds profile gun is selected, profile 0', () => {
    component.selectedGun = profileGun;
    const total = component.calculateProfileWounds(marineEquivalent, 0);
    expect(total).toEqual(0.19);
  });

  it('calculate melta wounds selected', () => {
    component.selectedGun = meltadGun;
    const total = component.calculateMeltaWounds(marineEquivalent, 0);
    expect(total).toEqual(2.9);
  });
});

describe('calculate Dead', () => {
  let component: AverageChosenComponent;
  let fixture: ComponentFixture<AverageChosenComponent>;
  let service: EpwhammerService;
  let issueService : IssueService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy};
  const mockGunList: any = [
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
    },
    {
      name: 'Assault Bolter',
      points: 0,
      Range: 18,
      Type: 'Assault',
      NoS: 3,
      S: 5,
      Ap: -1,
      D: 1,
      Ability: '',
    },
  ];
  const regularGun = {
    name: 'Accelerator Autocannon',
    points: 0,
    Range: 48,
    Type: 'Heavy',
    NoS: 3,
    S: 7,
    Ap: -1,
    D: 2,
    Ability: '',
  };
  const overchargedGun = {
    name: 'Assault Plasma Incinerator',
    points: 0,
    Range: 24,
    Type: 'Assault',
    NoS: 3,
    S: 6,
    Ap: -4,
    D: 1,
    Overcharged: {
      S: 7,
      Ap: -4,
      D: 2,
      Ability: '1 Mortal wound on 1s to hit',
    },
    Ability: '',
  };
  const meltaGun = {
    name: 'Multi-melta',
    points: 0,
    Ability: '',
    melta: {
      'no-melta': {
        Range: 24,
        Type: 'Heavy',
        NoS: 2,
        S: 8,
        Ap: -4,
        D: 'D6',
        Ability: '',
      },
      'melta-range': {
        Range: 12,
        Type: 'Heavy',
        NoS: 2,
        S: 8,
        Ap: -4,
        D: 'D6 + 2',
        Ability: '',
      },
    },
  };
  const profileGun = {
    name: 'Astartes Grenade Launcher',
    points: 5,
    Range: 30,
    Type: 'Assault',
    profile: {
      frag: {
        NoS: 'D6',
        S: 3,
        Ap: 0,
        D: 1,
        Ability: 'Blast',
      },
      krak: {
        NoS: 1,
        S: 6,
        Ap: -1,
        D: 'D3',
        Ability: '',
      },
    },
    Ability: '',
  };
  const marineEquivalent = MEQ;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AverageChosenComponent],
      imports: [HttpClientTestingModule],
      providers: [
        IssueService,
        { provide: MatDialog, useValue: {} },
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageChosenComponent);
    component = fixture.componentInstance;
    issueService = new IssueService(httpClientSpy as any);
    fixture.detectChanges();
  });

  it('calculate profile dead profile gun is selected, profile 0', () => {
    component.selectedGun = profileGun;
    const total = component.calculateProfileDead(marineEquivalent, 0);
    expect(total).toEqual(0);
  });
  it('calculate melta dead is selected, profile 1', () => {
    component.selectedGun = meltaGun;
    const total = component.calculateMeltaDead(marineEquivalent, 1);
    expect(total).toEqual(1);
  });
  it('calculate melta dead is selected, amount of killed models is 0', () => {
    component.selectedGun = meltaGun;
    const total = component.calculateMeltaDead({
      Toughness: 8,
      W: 10,
      Sv: 2,
      SvIn: 4,
      FnP: 5,
    }, 1);
    expect(total).toEqual('0');
  });
  it('calculate basic dead is selected, amount of killed models is higher than 0', () => {
    component.selectedGun = regularGun;
    const total = component.calculateBasicDead(marineEquivalent);
    expect(total).toEqual(1);
  });
  it('calculate Overcharged dead is selected, amount of killed models is 0', () => {
    component.selectedGun = overchargedGun;
    const total = component.calculateOverchargedDead({
      Toughness: 8,
      W: 10,
      Sv: 2,
      SvIn: 4,
      FnP: 5,
    });
    expect(total).toEqual('0');
  });
  it('Faction average dead is selected, amount of killed models is 0', () => {
    component.gunList = mockGunList;
    const total = component.factionAverageModelsKilled({
      Toughness: 8,
      W: 10,
      Sv: 2,
      SvIn: 4,
      FnP: 5,
    });
    expect(total).toEqual('0');
  });
});

describe('onSelect testing', () => {
  let component: AverageChosenComponent;
  let fixture: ComponentFixture<AverageChosenComponent>;
  let service: EpwhammerService;
  let issueService : IssueService;
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy};
  const regularGun: Gun = {
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
  };
  const overchargedGun: Gun = {
    name: 'Assault Plasma Incinerator',
    points: 0,
    Range: 24,
    Type: 'Assault',
    NoS: 3,
    S: 6,
    Ap: -4,
    D: 1,
    Overcharged: {
      name: '',
      Range: '',
      Type: '',
      NoS: '',
      S: 7,
      Ap: -4,
      D: 2,
      Ability: '1 Mortal wound on 1s to hit',
    },
    profile: '',
    Ability: '',
  };
  const profileGun = {
    name: 'Astartes Grenade Launcher',
    points: 5,
    Range: 30,
    Type: 'Assault',
    profile: {
      frag: {
        NoS: 'D6',
        S: 3,
        Ap: 0,
        D: 1,
        Ability: 'Blast',
      },
      krak: {
        NoS: 1,
        S: 6,
        Ap: -1,
        D: 'D3',
        Ability: '',
      },
    },
    Ability: '',
  };
  const meltadGun = {
    name: 'Multi-melta',
    Range: '',
    Type: '',
    points: 0,
    Ability: '',
    profile: '',
    Overcharged: '',
    melta: {
      'no-melta': {
        Range: 24,
        Type: 'Heavy',
        NoS: 2,
        S: 8,
        Ap: -4,
        D: 'D6',
        Ability: '',
      },
      'melta-range': {
        Range: 12,
        Type: 'Heavy',
        NoS: 2,
        S: 8,
        Ap: -4,
        D: 'D6 + 2',
        Ability: '',
      },
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AverageChosenComponent],
      imports: [HttpClientTestingModule],
      providers: [
        IssueService,
        { provide: MatDialog, useValue: {} },
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageChosenComponent);
    component = fixture.componentInstance;
    issueService = new IssueService(httpClientSpy as any);
    fixture.detectChanges();
  });
  it('test onselect for regular Gun', () => {
    const spyTime = spyOn(window, 'setTimeout');
    component.onSelect(regularGun);
    expect(spyTime).toHaveBeenCalled();
  });
  it('test onselect for profile Gun', () => {
    const spyTime = spyOn(window, 'setTimeout');
    component.onSelect(profileGun);
    expect(spyTime).toHaveBeenCalled();
  });
  it('test onselect for melta Gun', () => {
    const spyTime = spyOn(window, 'setTimeout');
    component.onSelect(meltadGun);
    expect(spyTime).toHaveBeenCalled();
  });
  it('testing set precisions Astartes', () => {
    component.setStats('Astartes');
    const myPrecision = component.actualPrecisions;
    expect(myPrecision).toEqual(['3+', '3+']);
  });
  it('testing set precisions Harlequins', () => {
    component.setStats('Harlequins');
    const myPrecision = component.actualPrecisions;
    expect(myPrecision).toEqual(['3+', '3+']);
  });
  it('testing set precisions Necrons', () => {
    component.setStats('Necrons');
    const myPrecision = component.actualPrecisions;
    expect(myPrecision).toEqual(['3+', '3+']);
  });
  it('testing set precisions Default', () => {
    component.setStats('sdvavins');
    const myPrecision = component.actualPrecisions;
    expect(myPrecision).toEqual(['4+', '4+']);
  });
});
