import { Meeting } from './meetings/meeting.entity';
import { Task } from './tasks/task.entity';
import { ContactInfo } from './contact-info/contact-info.entity';
import { Employee } from './employees/employee.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import config from 'ormconfig';

@Module({
  imports: [
    UsersModule,
    TodosModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Employee, ContactInfo, Task, Meeting]),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
