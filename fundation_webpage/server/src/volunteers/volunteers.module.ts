import { Module } from '@nestjs/common';
import { VolunteersController } from './volunteers.controller';
import { VolunteersService } from './volunteers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Volunteers } from './entities/volunteer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Volunteers])],
  controllers: [VolunteersController],
  providers: [VolunteersService],
})
export class VolunteersModule {}
