import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLicenseDto } from './dto/create-license.dto';
import { UpdateLicenseDto } from './dto/update-license.dto';
import { License } from './entities/license.entity';

@Injectable()
export class LicenseService {

  constructor(
    @InjectRepository(License)
    private licenseRepository: Repository<License>,
  ) {}

  findAll(): Promise<License[]> {
    return this.licenseRepository.find();
  }

  findOne(id: number): Promise<License> {
    return this.licenseRepository.findOneBy({ id });
  }

  async create(license: CreateLicenseDto) {
   return this.licenseRepository.save(license);
  }
  async remove(id: string): Promise<void> {
    await this.licenseRepository.delete(id);
  }
}
