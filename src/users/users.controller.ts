import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './Dtos/user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  CreateUser(@Body() body: UserDto) {
    return this.usersService.create(body.email, body.password);
  }
}
