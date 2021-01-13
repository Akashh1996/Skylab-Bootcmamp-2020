/* eslint-disable prefer-destructuring */
/* eslint-disable no-restricted-globals */
/* eslint-disable class-methods-use-this */
import { Injectable } from '@angular/core';
import { Gun } from './home';
import { Modifiers } from './DataModifiers';
@Injectable({
  providedIn: 'root',
})

export class EpwhammerService {
  currentModifiers: Modifiers | any = {
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

   neutralModifiers: Modifiers = {
     Wound: 0,
     Save: 0,
     Hit: 0,
     Damage: 0,
     ModAp: 0,
     SInV: 7,
     FnP: 7,
     rerollHits: 'none',
     rerollWounds: 'none',
     rerollSaved: 'none',
     rerollDamage: 'none',
   };

  attacks: number = 1;

  baseStrength: number = 4;

  numberOfModels: number = 1;

  gunsPerModels: number = 1;

  precisions: string[]= [
    '4+', '4+',
  ];

  get modifiers(): Modifiers {
    return this.currentModifiers;
  }

  get actualPrecisions() {
    return this.precisions;
  }

  get actualAttacks() {
    return this.attacks;
  }

  get actualBaseStrength() {
    return this.baseStrength;
  }

  get actualNumberOfModels() {
    return this.numberOfModels;
  }

  get actualGunsPerModels() {
    return this.gunsPerModels;
  }

  setActualAttacks(newAttacks: number) {
    this.attacks = newAttacks;
  }

  SetActualBaseStrength(newBaseStrength: number) {
    this.baseStrength = newBaseStrength;
  }

  setPrecisions(precision1: string, precision2:string) {
    this.precisions[0] = precision1;
    this.precisions[1] = precision2;
  }

  setNumberOfModels(models: number) {
    this.numberOfModels = models;
  }

  setGunsPerfModels(gunsInModel: number) {
    this.gunsPerModels = gunsInModel;
  }

  setModifiers(newModifiers:Modifiers | any) {
    this.currentModifiers = newModifiers;
    return this.currentModifiers;
  }

  toHit(Precision: string, precisionModifier: number): number {
    let myPrecision: number = 4;
    switch (Precision) {
      case '2+':
        myPrecision = 2;
        break;
      case '3+':
        myPrecision = 3;
        break;
      case '4+':
        myPrecision = 4;
        break;
      case '5+':
        myPrecision = 5;
        break;
      case '6+':
        myPrecision = 6;
        break;
      default:
        break;
    }
    let result: number = 7;
    const usedPrecisionModifier:number = precisionModifier;
    result = myPrecision;
    result -= usedPrecisionModifier;
    if (result < 2) {
      result = 2;
    }
    if (result > 6) {
      result = 6;
    }
    return result;
  }

  chooseSv(RegAp: number, Sv: number, SvI: number, { ModAp, Save, SInV }:Modifiers): number {
    let usedSv: number;
    const newSinvul = SInV;
    const usedSvModifier:number = Save;
    const SvInv = Math.min(newSinvul, SvI);
    const finalAp = RegAp + ModAp;
    if ((Sv - finalAp) < SvInv) {
      usedSv = Sv - finalAp;
    } else {
      usedSv = SvInv;
    }
    usedSv -= usedSvModifier;
    if (usedSv < 2) {
      usedSv = 2;
    }
    if (usedSv > 7) {
      usedSv = 7;
    }
    return usedSv;
  }

  toWound(S: number, T: number, woundModifier: number): number {
    let result: number = 7;
    const usedWoundModifier:number = woundModifier;
    if (S >= 2 * T) {
      result = 2;
    }
    if (S > T && result === 7) {
      result = 3;
    }
    if (S === T && result === 7) {
      result = 4;
    }
    if (S * 2 <= T && result === 7) {
      result = 6;
    }
    if (S < T && result === 7) {
      result = 5;
    }
    result -= usedWoundModifier;
    if (result < 2) {
      result = 2;
    }
    if (result > 6) {
      result = 6;
    }
    return result;
  }

  estimateVal(val: string | number): number {
    let estimatedVal: number;
    estimatedVal = 0;
    if (typeof (val) === 'string') {
      switch (val) {
        case '1':
          estimatedVal = 1;
          break;
        case 'D6':
          estimatedVal = 3.5;
          break;
        case 'D3':
          estimatedVal = 2;
          break;
        case '2D6':
          estimatedVal = 7;
          break;
        case '2D3':
          estimatedVal = 4;
          break;
        case '3D3':
          estimatedVal = 6;
          break;
        case 'D3 + 3':
          estimatedVal = 5;
          break;
        case 'D6 + 2':
          estimatedVal = 5.5;
          break;
        case 'D6 + 4':
          estimatedVal = 7.5;
          break;
        case 'x2':
          estimatedVal = 4;
          break;
        case 'User':
          estimatedVal = 0;
          break;
        default:
          estimatedVal = NaN;
          break;
      }
    } else {
      estimatedVal = val;
    }
    return estimatedVal;
  }

  calculations(NoS : string | number, hitOn:number, woundOn: number, chosenSv: number):number {
    const result: number = this.estimateVal(NoS) * hitOn * woundOn * chosenSv;
    return result;
  }

  determineRerollEffect(typeOfReroll: string, possibility: number) {
    let result: number = possibility;
    switch (typeOfReroll) {
      case 'none':
        result = possibility;
        break;
      case '1s':
        result = (possibility + (1 - possibility) * (1 / 6));
        break;
      case 'All Failed':
        result = (possibility + (1 - possibility) * (possibility));
        break;
      case '6s':
        result = (possibility - (1 - possibility) * (1 / 6));
        break;
      case 'All Successful':
        result = (possibility - (1 - possibility) * (possibility));
        break;
      default:
        break;
    }
    return parseFloat(result.toFixed(2));
  }

  calculateRerollDamage(typeOfReroll: string, damage: number | string):number {
    let result: number = 0;
    if (typeof (damage) === 'string') {
      if (typeOfReroll === 'Reroll Favorable') {
        switch (damage) {
          case '1':
            result = 1;
            break;
          case 'D6':
            result = 5.25;
            break;
          case 'D3':
            result = 3;
            break;
          case '2D6':
            result = 10.5;
            break;
          case '2D3':
            result = 6;
            break;
          case 'D3 + 3':
            result = 6;
            break;
          case 'D6 + 2':
            result = 7.25;
            break;
          case 'D6 + 4':
            result = 9.25;
            break;
          default:
            break;
        }
      } else if (typeOfReroll === 'Reroll Disfavorable') {
        switch (damage) {
          case '1':
            result = 1;
            break;
          case 'D6':
            result = 1.75;
            break;
          case 'D3':
            result = 1;
            break;
          case '2D6':
            result = 3.5;
            break;
          case '2D3':
            result = 2;
            break;
          case 'D3 + 3':
            result = 4;
            break;
          case 'D6 + 2':
            result = 3.75;
            break;
          case 'D6 + 4':
            result = 5.75;
            break;
          default:
            break;
        }
      } else {
        result = this.estimateVal(damage);
      }
    } else {
      result = damage;
    }
    return result;
  }

  calculateWounds({
    S, Ap, D, NoS, Range,
  }: Gun, precision: string, Toughness: number, Sv: number, SvInv: number, FnP: number, modifiers: Modifiers): number | string {
    let actualStrength: number = this.estimateVal(S);
    let Attacks: string | number = NoS;
    if (Range === 'Melee') {
      Attacks = this.actualAttacks;
      actualStrength += this.actualBaseStrength;
    }
    let hitOn: number = this.toHit(precision, modifiers.Hit);
    let woundOn: number = this.toWound(actualStrength, Toughness, modifiers.Wound);
    let chosenSv: number = this.chooseSv(this.estimateVal(Ap), Sv, SvInv, modifiers);
    Attacks = this.estimateVal(Attacks);
    hitOn = (7 - hitOn) / 6;
    hitOn = this.determineRerollEffect(modifiers.rerollHits, hitOn);
    woundOn = (7 - woundOn) / 6;
    woundOn = this.determineRerollEffect(modifiers.rerollWounds, woundOn);
    chosenSv = 1 - (7 - chosenSv) / 6;
    chosenSv = this.determineRerollEffect(modifiers.rerollSaved, chosenSv);
    const thisFnP: number = 1 - (7 - Math.min(FnP, modifiers.FnP)) / 6;

    let dmg:number = (this.calculateRerollDamage(modifiers.rerollDamage, D) - modifiers.Damage);

    if (dmg < 1) {
      dmg = 1;
    }

    let result: number | string = this.calculations(Attacks, hitOn, woundOn, chosenSv) * (dmg * thisFnP);
    result = result * this.actualNumberOfModels * this.actualGunsPerModels;
    result = parseFloat(result.toFixed(2));
    if (isNaN(result)) {
      result = '';
    }
    return result;
  }

  calculateDeadModels({
    S, Ap, D, NoS, Range,
  }: Gun,
  precision:string,
  Toughness: number, Sv: number, SvInv: number, FnP: number, modifiers: Modifiers, wounds: number): number | string {
    let actualStrength: number = this.estimateVal(S);
    let Attacks: string | number = NoS;
    if (Range === 'Melee') {
      Attacks = this.attacks;
      actualStrength += this.baseStrength;
    }
    let hitOn: number = this.toHit(precision, modifiers.Hit);
    let woundOn: number = this.toWound(actualStrength, Toughness, modifiers.Wound);
    let chosenSv: number = this.chooseSv(this.estimateVal(Ap), Sv, SvInv, modifiers);
    Attacks = this.estimateVal(Attacks);
    hitOn = (7 - hitOn) / 6;
    hitOn = this.determineRerollEffect(modifiers.rerollHits, hitOn);
    woundOn = (7 - woundOn) / 6;
    woundOn = this.determineRerollEffect(modifiers.rerollWounds, woundOn);
    chosenSv = 1 - (7 - chosenSv) / 6;
    chosenSv = this.determineRerollEffect(modifiers.rerollSaved, chosenSv);
    const thisFnP: number = 1 - (7 - Math.min(FnP, modifiers.FnP)) / 6;
    let result: number | string = 0;
    let i: number = -1;
    const damage: number = (this.estimateVal(D) * thisFnP);
    const effectiveDamage: number = (this.calculations(Attacks, hitOn, woundOn, chosenSv));
    if (!isNaN(effectiveDamage)) {
      if (damage === wounds) {
        result = effectiveDamage;
      } else if (damage > wounds) {
        result = effectiveDamage;
      } else if (damage < wounds) {
        let flag = effectiveDamage * damage;
        while (flag >= 0) {
          flag -= wounds;
          i += 1;
        }
        result = i;
      }
      const preResult: number = Math.round((parseFloat(result.toFixed(2))));
      if (result - preResult > 0.45) {
        result = preResult + 1;
      } else {
        result = preResult;
      }
    }

    if (typeof (S) === 'undefined' || typeof (Ap) === 'undefined' || typeof (D) === 'undefined') {
      result = '';
    }
    return result;
  }

  factionAverageWounds(gun: Gun[], precision: string[], T: number, Sv: number, SvInv: number, FnP: number)
  : number {
    let i: number = 0;
    let total: number = 0;
    let result: number | string = 0;
    for (i; i < gun.length; i += 1) {
      let correctprecision;
      if (gun[i].Range === 'Melee') {
        correctprecision = precision[1];
      } else {
        correctprecision = precision[2];
      }
      result = this.calculateWounds(gun[i], correctprecision, T, Sv, SvInv, FnP, this.neutralModifiers);
      if (typeof (result) === 'number') {
        total += result;
      }
    }
    total /= i;
    return (parseFloat(total.toFixed(2)));
  }

  factionAverageModelsKilled(gun: Gun[], precision: string[], T: number, Sv: number, SvInv: number, FnP: number, wounds: number)
  : number {
    let i: number = 0;
    let total: number = 0;
    let result: number | string = 0;
    for (i; i < gun.length; i += 1) {
      let correctprecision;
      if (gun[i].Range === 'Melee') {
        correctprecision = precision[1];
      } else {
        correctprecision = precision[2];
      }
      result = this.calculateDeadModels(gun[i], correctprecision, T, Sv, SvInv, FnP, this.neutralModifiers, wounds);
      if (typeof (result) === 'number') {
        if (!isNaN(result)) {
          total += result;
        }
      }
    }
    total /= i;
    return (parseFloat(total.toFixed(2)));
  }
}
