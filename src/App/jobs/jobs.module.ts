import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsController } from './jobs.controller';
import { JobService } from './jobs.service';
import { Job } from 'src/entity/job.entity';
import { User } from 'src/entity/user.entity';
import { Category } from 'src/entity/category.entity';
import { Address } from 'src/entity/address.entity';
import { JobRepository } from './jobs.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Job, User, Category, Address, JobRepository]),
  ],
  providers: [JobService],
  controllers: [JobsController],
})
export class JobsModule {}
