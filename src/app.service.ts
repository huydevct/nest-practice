import { Task } from './tasks/task.entity';
import { Meeting } from './meetings/meeting.entity';
import { ContactInfo } from './contact-info/contact-info.entity';
import { Employee } from './employees/employee.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
    @InjectRepository(ContactInfo)
    private contactInfoRepo: Repository<ContactInfo>,
    @InjectRepository(Meeting)
    private meetingRepo: Repository<Meeting>,
    @InjectRepository(Task)
    private taskRepo: Repository<Task>,
  ) {}

  async seed() {
    //employee 1 CEO
    const ceo = this.employeeRepo.create({ name: 'Mr.CEO' });
    await this.employeeRepo.save(ceo);

    const ceoContactInfo = this.contactInfoRepo.create({
      email: 'email@email.com',
    });
    ceoContactInfo.employee = ceo;
    await this.contactInfoRepo.save(ceoContactInfo);

    //employee 2 Manager(me)
    const manager = this.employeeRepo.create({
      name: 'Huy',
      manager: ceo,
    });

    const task1 = this.taskRepo.create({ name: 'Hire people' });
    await this.taskRepo.save(task1);
    const task2 = this.taskRepo.create({ name: 'Present to CEO' });
    await this.taskRepo.save(task2);

    manager.tasks = [task1, task2];

    const meeting1 = this.meetingRepo.create({ zoomUrl: 'meeting.com' });
    meeting1.attendees = [ceo];
    await this.meetingRepo.save(meeting1);

    manager.meetings = [meeting1];

    await this.employeeRepo.save(manager);
  }

  getEmployeeById(id: number) {
    //way 1
    return this.employeeRepo.findOne(id, {
      relations: [
        'manager',
        'directReports',
        'tasks',
        'contactInfo',
        'meetings',
      ],
    });

    //way 2
    // return this.employeeRepo
    //   .createQueryBuilder('employee')
    //   .leftJoinAndSelect('employee.directReports', 'directReports')
    //   .leftJoinAndSelect('employee.meetings', 'meetings')
    //   .leftJoinAndSelect('employee.tasks', 'tasks')
    //   .where('employee.id = :employeeId', {employeeId: id})
    //   .getOne();
  }

  deleteEmployee(id: number){
    return this.employeeRepo.delete(id);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
