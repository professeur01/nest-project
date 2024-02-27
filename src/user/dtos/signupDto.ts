import { IsString, IsEmail, Length, IsNotEmpty } from 'class-validator';
export class SignupDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  readonly username: 'string';

  @IsEmail()
  readonly email: 'string';

  @Length(8, 30)
  readonly password: 'string';
}
