import { User } from './entities/user.entity';
import { CreateUserDTO } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['pets']
    }); // select * from user JOIN pets
  }

  async getOneById(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail({ id }); //select * from user where user.id = id
      return user;
    } catch (error) {
      throw error;
    }
  }

  createUserDB(name: string): Promise<User> {
    const newUser = this.userRepository.create({ name });

    return this.userRepository.save(newUser); // insert
  }

  async updateUser(id: number, name: string): Promise<User> {
    const user = await this.getOneById(id);
    user.name = name;

    return this.userRepository.save(user);
  }

  async deleteUser(id: number): Promise<User> {
    const user = await this.getOneById(id);

    return this.userRepository.remove(user);
  }

  // private users: User[] = [
  //   { id: 0, name: 'Huy' },
  //   { id: 0, name: 'Van' },
  //   { id: 0, name: 'Vinh' },
  //   { id: 0, name: 'Nam' },
  // ];

  // findAll(name?: string): User[] {
  //   if (name) {
  //     return this.users.filter((user) => user.name === name);
  //   }
  //   return this.users;
  // }

  // findById(userId: number): User {
  //   return this.users.find((user) => user.id === userId);
  // }

  // createUser(body: CreateUserDTO): User {
  //   const newUser = { id: Date.now(), ...body };

  //   this.users.push(newUser);

  //   return newUser;
  // }
}
