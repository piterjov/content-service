import { Module } from '@nestjs/common';
import { FrontController } from './front/front.controller';

@Module({
  controllers: [FrontController],
})
export class FrontModule { }
