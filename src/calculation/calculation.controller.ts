import { Controller, Get, Query } from '@nestjs/common';
import { CalculationService } from './calculation.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('calculation')
export class CalculationController {
  constructor(private readonly calculationService: CalculationService) {}

  @ApiTags('/add')
  @Get('/add')
  add(@Query('x') x: string, @Query('y') y: string): number {
    const numX = parseFloat(x);
    const numY = parseFloat(y);
    return this.calculationService.add(numX, numY);
  }

  @ApiTags('/subtract')
  @Get('/subtract')
  subtract(@Query('x') x: string, @Query('y') y: string): number {
    const numX = parseFloat(x);
    const numY = parseFloat(y);
    return this.calculationService.subtract(numX, numY);
  }

  @ApiTags('/multiply')
  @Get('/multiply')
  multiply(@Query('x') x: string, @Query('y') y: string): number {
    const numX = parseFloat(x);
    const numY = parseFloat(y);
    return this.calculationService.multiply(numX, numY);
  }

  @ApiTags('/divide')
  @Get('/divide')
  divide(@Query('x') x: string, @Query('y') y: string): number {
    const numX = parseFloat(x);
    const numY = parseFloat(y);
    return this.calculationService.divide(numX, numY);
  }
}
