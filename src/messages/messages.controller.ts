import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
  createMessage(@Body() body: JSON) {
    console.log(body);
    return `${body}`;
  }
}
