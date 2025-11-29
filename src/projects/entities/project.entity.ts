import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import ProjectStatusEnum from '../enums/projectStatusEnum';
import { Task } from '../../tasks/entities/task.entity';

@Entity({ name: 'projects' })
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column({
    type: 'enum',
    enum: ProjectStatusEnum,
    default: ProjectStatusEnum.Enabled,
  })
  status: ProjectStatusEnum;

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];
}
