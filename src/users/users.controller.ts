import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './Dtos/user.dto';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  CreateUser(@Body() body: UserDto) {
    console.log(body);
  }
}
