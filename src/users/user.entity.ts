import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: NumberConstructor;

  @Column()
  email: string;

  @Column()
  password: string;
}
