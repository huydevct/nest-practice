import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
  };

@Injectable()
export class UserService {
    private readonly users: User[] = [
        {
          id: 1,
          name: 'huy',
          username: 'huydev',
          password: '1234',
        },
        {
          id: 2,
          name: 'huyy',
          username: 'huyvip',
          password: '1',
        },
      ];
    
      async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }
}
