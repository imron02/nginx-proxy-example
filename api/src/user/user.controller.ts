import {Body, Controller, Get, Post} from '@nestjs/common';
import {User} from "./entities/user";
import {UserService} from "./user.service";

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
