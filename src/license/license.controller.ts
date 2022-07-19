import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LicenseService } from './license.service';
import { CreateLicenseDto } from './dto/create-license.dto';
import { UpdateLicenseDto } from './dto/update-license.dto';
import { License } from './entities/license.entity';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('license')
@Controller('license')
export class LicenseController {
  constructor(private readonly licenseService: LicenseService) {}

  @Post()
  create(@Body() createLicenseDto: CreateLicenseDto) {
    
    return this.licenseService.create(createLicenseDto);
  }

  @Get()
  findAll() {
    return this.licenseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.licenseService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.licenseService.remove(id);
  }
}
