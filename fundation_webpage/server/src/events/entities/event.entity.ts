import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { EventDetail } from './event-detail.entity';

@Entity('events')
export class Events {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    ubication: string;

    @Column()
    description: string;

    @Column({ type: 'timestamp' })
    startDate: Date;

    @Column({ type: 'timestamp' })
    endDate: Date;

    @OneToMany(() => EventDetail, (eventDetail) => eventDetail.event)
    eventDetails: EventDetail[];
}