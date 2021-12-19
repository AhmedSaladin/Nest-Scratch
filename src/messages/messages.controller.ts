import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'hi';
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return `${id}`;
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return `${body.content}`;
  }
}
