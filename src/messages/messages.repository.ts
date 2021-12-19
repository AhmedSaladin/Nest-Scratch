import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = JSON.parse(await readFile('db.json', 'utf-8'));
    return contents.messages.find((obj) => obj.id == id);
  }

  async findAll() {
    const contents = JSON.parse(await readFile('db.json', 'utf-8'));
    return contents.messages;
  }

  async create(content: string) {
    const contents = JSON.parse(await readFile('db.json', 'utf-8'));
    const id = Math.floor(Math.random() * 999);
    const newMessage = { id, content };
    contents.messages.push(newMessage);
    await writeFile('db.json', JSON.stringify(contents));
  }
}
