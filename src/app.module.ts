import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculationService } from './calculation/calculation.service';
import { CalculationController } from './calculation/calculation.controller';
import { ConversionService } from './conversion/conversion.service';
import { ConversionController } from './conversion/conversion.controller';

@Module({
  imports: [],
  controllers: [AppController, CalculationController, ConversionController],
  providers: [AppService, CalculationService, ConversionService],
})
export class AppModule {}
