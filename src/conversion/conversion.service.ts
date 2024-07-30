import { Injectable } from '@nestjs/common';
import { Units } from './units.enum';

@Injectable()
export class ConversionService {
  convertLength(l: number, u: Units) {
    switch (u) {
      case Units.KILOMETER:
        return l * 0.621371;
      case Units.MILE:
        return l * 1.60934;
      default:
        throw new Error('Unsupported unit');
    }
  }
  convertWeight(w: number, u: Units) {
    switch (u) {
      case Units.KILOGRAM:
        return w * 2.20462;
      case Units.POUND:
        return w * 0.453592;
      default:
        throw new Error('Unsupported unit');
    }
  }
  convertTemperature(t: number, u: Units) {
    switch (u) {
      case Units.FAHRENHEIT:
        return ((t - 32) * 5) / 9;
      case Units.CELSIUS:
        return (t * 9) / 5 + 32;
      default:
        throw new Error('Unsupported unit');
    }
  }
}
