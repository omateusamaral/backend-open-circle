import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn} from 'typeorm';

@Entity('users')
export default class User{
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  document:string;

  @Column()
  contract:string;

  @Column()
  username:string;

  @Column()
  occupation:string;

  @Column()
  email:string;

  @Column()
  telefone1:string;

  @Column()
  telefone2:string;

  @CreateDateColumn()
  created_at:Date;


}