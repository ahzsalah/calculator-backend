import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculationService {
  add(x: number, y: number): number {
    return x + y;
  }
  subtract(x: number, y: number): number {
    return x - y;
  }
  multiply(x: number, y: number): number {
    return x * y;
  }
  divide(x: number, y: number): number {
    return x / y;
  }
}
