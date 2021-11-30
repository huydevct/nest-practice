import { User } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: User[] = [{ id: 0, name: 'Huy' }];

  findAll() {
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  createUser(body: CreateUserDTO): User {
    const newUser = { id: Date.now(), ...body };

    this.users.push(newUser);

    return newUser;
  }
}
