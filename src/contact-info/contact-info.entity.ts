import { Employee } from './../employees/employee.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ContactInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    phone: string;

    @Column()
    email: string;

    @Column()
    employeeId: number;

    @OneToOne(() => Employee, employee => employee.contactInfo, {onDelete: 'CASCADE'})
    @JoinColumn()
    employee: Employee;
}