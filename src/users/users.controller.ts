import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { UserDto } from './Dtos/user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  CreateUser(@Body() body: UserDto) {
    return this.usersService.create(body.email, body.password);
  }

  @Get('/:id')
  async findUser(@Param() id: string) {
    const user = await this.usersService.findOne(parseInt(id));
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  @Get()
  async findAllUsers(@Query('email') email: string) {
    const user = await this.usersService.find(email);
    if (user.length === 0) throw new NotFoundException('email not found');
    return user;
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(parseInt(id));
  }
}
