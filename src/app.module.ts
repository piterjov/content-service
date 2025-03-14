import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { FrontModule } from './front/front.module';
import {PrismaModule} from "./prisma/prisma.module";

@Module({
  imports: [AdminModule, FrontModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
