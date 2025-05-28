import { EventDetail } from 'src/events/entities/event-detail.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('volunteers')
export class Volunteers {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({})
    fullName: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    phoneNumber: string;

    @Column({ default: true })
    active: boolean;

    @OneToMany(() => EventDetail, (eventDetail) => eventDetail.volunteer)
    eventDetails: EventDetail[];
}