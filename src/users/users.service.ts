import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        id: 1,
        username: 'Maciek',
        password: 'somePass',
      },
      {
        id: 2,
        username: 'Jureas',
        password: 'mmapanowie',
      },
      {
        id: 1,
        username: 'Waldek',
        password: 'yolo',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}
