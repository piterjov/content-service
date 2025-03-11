import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MovieController } from './movie/movie.controller';
import { AdminModule } from './admin/admin.module';
import { FrontModule } from './front/front.module';

@Module({
  imports: [AdminModule, FrontModule],
  controllers: [AppController, MovieController],
  providers: [AppService],
})
export class AppModule {}
