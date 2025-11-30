import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Import the controller and service for the Tasks feature
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';

// Import entities used in this module
import { Task } from './entities/task.entity';
import { Project } from '../projects/entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task, Project])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
