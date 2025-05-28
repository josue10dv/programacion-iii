import { Injectable } from '@nestjs/common';
import { Volunteers } from './entities/volunteer.entity';
import { CreateVolunteerDto } from './dto/create-volunteer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SuccessResponseDto } from 'src/common/dto/response.dto';

@Injectable()
export class VolunteersService {
    // Este servicio realizara acciones para la entidad `Volunteers`.

    // Constructor del servicio
    constructor(
        @InjectRepository(Volunteers)
        private readonly volunteerRepository: Repository<Volunteers>,
    ) { }

    // Crea un nuevo voluntario
    async create(createVolunteerDto: CreateVolunteerDto) {
        const volunteer = this.volunteerRepository.create(createVolunteerDto);
        return new SuccessResponseDto('Voluntario creado exitosamente', volunteer);
    }

    // Obtiene todos los voluntarios
    async findAll() {
        const list = await this.volunteerRepository.find();
        if (list.length === 0) {
            throw new Error('No se encontraron voluntarios');
        }
        return new SuccessResponseDto('Lista de voluntarios obtenida exitosamente', list);
    }

}