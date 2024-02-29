import { IsNotEmpty, IsEmail, IsString, Length } from 'class-validator';

export class loginDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(8, 30)
  password: string;
}
