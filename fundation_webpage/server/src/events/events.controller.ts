import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { SuccessResponseDto } from 'src/common/dto/response.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
@UseGuards(JwtAuthGuard)
export class EventsController {
    constructor(private readonly eventsService: EventsService) { }

    @Post()
    async create(@Body() createEventsDto: CreateEventDto) {
        const event = await this.eventsService.create(createEventsDto);
        return new SuccessResponseDto('Event created', event);
    }

    @Get()
    async findAll() {
        const list = await this.eventsService.findAll();
        return new SuccessResponseDto('List of events', list);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        const event = await this.eventsService.findOne(id);
        return new SuccessResponseDto('Event found', event);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const result = await this.eventsService.remove(id);
        return new SuccessResponseDto('Event removed', { success: result });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
        try {
            const event = await this.eventsService.update(id, updateEventDto);
            return new SuccessResponseDto('Event updated', event);
        } catch (error) {
            return new SuccessResponseDto('Error updating event', { error: error.message });
        }
    }
}
