import { Injectable } from '@nestjs/common';
import { NewUserInput } from './dto/new-users.input';
import { UserssArgs } from './dto/users.args';
import { Users } from './models/users.model';

@Injectable()
export class UserService {
private readonly users:Users[]=[
  {
    id: "1",
    name: "Nipu",
    email: "example@gmail.com",
    password: "1234"
  },
  {
    id: "2",
    name: "Bakshi",
    email: "example2@gmail.com",
    password: "1234"
  },
  {
    id: "3",
    name: "Rumi",
    email: "example3@gmail.com",
    password: "1234"
  }
]

  async create(data: NewUserInput): Promise<Users> {
    this.users.push(data as any)
    return data as any
  }

  async findOneById(id: string): Promise<Users> {
    return this.users.find(user=>user.id===id)
  }

  async findAll(usersArgs: UserssArgs): Promise<Users[]> {
    return this.users
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}