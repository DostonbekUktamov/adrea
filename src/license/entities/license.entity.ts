import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class License {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  aggregator: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(type => User, user => user.licenses)
  @JoinColumn({name: 'userId'})
  userId: number;
}
