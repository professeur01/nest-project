import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
 readonly nom: string;

  @Column()
 readonly prenom: string;

  @Column({ unique: true })
 readonly email: string;

  @Column()
 readonly password: string;

  @Column()
 readonly numeroTelephone: 'string';
}
