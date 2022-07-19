import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  create(user: CreateUserDto) {
    return this.usersRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({
      relations: ['licenses'],
    });
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }


  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
