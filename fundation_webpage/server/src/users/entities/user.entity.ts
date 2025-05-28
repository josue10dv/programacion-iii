import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ nullable: true })
    profile: string;
}