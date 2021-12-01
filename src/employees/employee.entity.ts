import { Meeting } from './../meetings/meeting.entity';
import { Task } from './../tasks/task.entity';
import { ContactInfo } from './../contact-info/contact-info.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Employee, (employee) => employee.directReports, {
    onDelete: 'SET NULL',
  })
  manager: Employee;

  @OneToMany(() => Employee, (employee) => employee.manager)
  directReports: Employee[];

  @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.employee)
  contactInfo: ContactInfo;

  @OneToMany(() => Task, (task) => task.employee, { eager: true })
  tasks: Task[];

  @ManyToMany(() => Meeting, (meeting) => meeting.attendees)
  @JoinTable()
  meetings: Meeting[];
}
