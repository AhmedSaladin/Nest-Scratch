import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'hi';
  }

  @Get('/:id')
  getMessage() {
    return 'id';
  }

  @Post()
  createMessage() {
    return 'updated';
  }
}
