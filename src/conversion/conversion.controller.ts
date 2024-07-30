import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ConversionService } from './conversion.service';
import { get } from 'http';
import { Units } from './units.enum';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('/conversion')
@Controller('conversion')
export class ConversionController {
  constructor(private readonly conversionService: ConversionService) {}

  private parseUnits(unit: string): Units {
    const units = Object.values(Units);
    if (units.includes(unit as Units)) {
      return unit as Units;
    }
    throw new BadRequestException(`Invalid unit: ${unit}`);
  }

  @Get('/length')
  convertLength(@Query('l') l: string, @Query('u') u: string): number {
    const numL = parseFloat(l);
    const unit = this.parseUnits(u);
    return this.conversionService.convertLength(numL, unit);
  }

  @Get('/weight')
  convertWeight(@Query('w') w: string, @Query('u') u: string): number {
    const numW = parseFloat(w);
    const unit = this.parseUnits(u);
    return this.conversionService.convertWeight(numW, unit);
  }

  @Get('/temp')
  convertTemperature(@Query('t') t: string, @Query('u') u: string): number {
    const numT = parseFloat(t);
    const unit = this.parseUnits(u);
    return this.conversionService.convertTemperature(numT, unit);
  }
}
