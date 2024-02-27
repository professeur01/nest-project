import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, Length, IsNotEmpty, IsNumber } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
 readonly id: number;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  nom: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  prenom: string;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  @Length(8, 11)
  numeroTelephone: number;

  @Column({ default: true })
  isActive: boolean;
}