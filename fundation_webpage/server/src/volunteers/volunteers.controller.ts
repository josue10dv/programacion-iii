import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { VolunteersService } from './volunteers.service';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';

@Controller('volunteers')
@UseGuards(JwtAuthGuard)
export class VolunteersController {
    constructor(private readonly volunteersService: VolunteersService) { }

    @Post()
    async create(@Body() createVolunteerDto: CreateVolunteerDto) {
        const volunteer = await this.volunteersService.create(createVolunteerDto);
        return new SuccessResponseDto('Volunteer created', volunteer);
    }

    @Get()
    async findAll() {
        const list = await this.volunteersService.findAll();
        return new SuccessResponseDto('List of volunteers', list);
    }
}