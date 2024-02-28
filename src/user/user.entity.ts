import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
   nom: string;

  @Column()
   prenom: string;

  @Column()
   numeroTelephone: 'number';

}