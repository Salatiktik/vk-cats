import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Cat from '../entity/cat.entity';
import { CatsService } from './cat.service';
import { CatsController } from './cat.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}