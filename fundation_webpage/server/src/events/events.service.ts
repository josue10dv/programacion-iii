import { Injectable } from '@nestjs/common';
import { Events } from './entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
    // Este servicio realizara acciones para la entidad `Events`.

    // Constructor del servicio
    constructor(
        @InjectRepository(Events)
        private readonly eventRepository: Repository<Events>,
    ) { }

    // Crea un nuevo voluntario
    async create(createEventDto: CreateEventDto): Promise<Events> {
        const event = this.eventRepository.create(createEventDto);
        return event;
    }

    // Obtiene todos los eventos
    async findAll(): Promise<Events[]> {
        const list = await this.eventRepository.find({
            relations: ['eventDetails', 'eventDetails.volunteer'],
        });

        // if (list.length === 0) {
        //     throw new Error('No se encontraron eventos');
        // }

        return list;
    }

    // Obtiene la informacion de un evento por su ID
    async findOne(id: string): Promise<Events> {
        const event = await this.eventRepository.findOne({
            where: { id },
            relations: ['eventDetails', 'eventDetails.volunteer'],
        });

        if (!event) {
            throw new Error(`Evento con ID ${id} no encontrado`);
        }

        return event;
    }

    // Elimina un evento por su ID
    async remove(id: string): Promise<boolean> {
        const result = await this.eventRepository.delete(id);

        if (result.affected === 0) {
            throw new Error(`Evento con ID ${id} no encontrado`);
        }
        return (result.affected || 0) > 0;
    }

    // Actualiza un evento por su ID
    async update(id: string, updateEventDto: UpdateEventDto): Promise<Events> {
        const event = await this.eventRepository.preload({
            id,
            ...updateEventDto,
        });

        if (!event) {
            throw new Error(`Evento con ID ${id} no encontrado`);
        }

        await this.eventRepository.save(event);
        return event;
    }
}
