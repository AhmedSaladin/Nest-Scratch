import { BadRequestException, Injectable } from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { UsersService } from './users.service';
import { promisify } from 'util';
const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async signUp(email: string, password: string) {
    const users = await this.userService.find(email);
    if (users.length) throw new BadRequestException('Email already exist');
    const hashedPassword = await this.hashPassword(password);
    const user = await this.userService.create(email, hashedPassword);
    return user;
  }

  async signIn(email: string, password: string) {
    const user = await this.userService.find(email);
    if (user.length) throw new BadRequestException('Email already exist');
  }

  private async hashPassword(password: string) {
    const salt = randomBytes(8).toString('hex');
    console.log(salt);
    const hashedPassword = (await scrypt(password, salt, 32)) as Buffer;
    const newPassword = salt + '.' + hashedPassword.toString('hex');
    return newPassword;
  }
}
