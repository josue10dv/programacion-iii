import { Volunteers } from 'src/volunteers/entities/volunteer.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Events } from './event.entity';

@Entity('event_detail')
export class EventDetail {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => Events, (event) => event.id)
    @JoinColumn({ name: 'event_id' })
    event: Events;

    @ManyToOne(() => Volunteers, (volunteer) => volunteer.id)
    @JoinColumn({ name: 'volunteer_id' })
    volunteer: Volunteers;
}