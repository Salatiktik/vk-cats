import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Cat from './entity/cat.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
        useFactory: ()=>({
          type: 'postgres',
          host: 'cat-pinterest-api-pg',
          port: 5432,
          username: 'postgres',
          password: 'postgresadmin1',
          database: 'support_lk_db',
          entities: [Cat],
          synchronize: true,
        })
    }),
  ],
})
export class DatabaseModule {}