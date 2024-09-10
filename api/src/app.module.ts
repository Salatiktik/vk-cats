import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './database/cats/cat.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule,CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
