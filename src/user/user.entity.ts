import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

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
  @Exclude()
 readonly password: string;

  @Column()
 readonly numeroTelephone: 'string';
}
