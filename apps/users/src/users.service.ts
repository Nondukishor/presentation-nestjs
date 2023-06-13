import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: "1",
      email: "example@gmail.com",
      password: "1234"
    },
    {
      id: "2",
      email: "example2@gmail.com",
      password: "1234"
    }
  ];

  create(createUserInput: CreateUserInput) {
    this.users.push(createUserInput);
    return createUserInput;
  }

  findAll() {
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }
}
