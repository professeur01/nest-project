import {
  IsString,
  IsEmail,
  Length,
  IsNotEmpty,
} from 'class-validator';
export class SignupDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  nom: 'string';

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
 readonly prenom: 'string';

  @IsEmail()
 readonly email: 'string';

  @IsString()
  @IsNotEmpty()
  @Length(8, 30)
 readonly password: string;

  @Length(8, 11)
  @IsNotEmpty()
 readonly numeroTelephone: 'string';
}
