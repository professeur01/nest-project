import { IsString, Length, IsNotEmpty } from 'class-validator';
export class SignupDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
   nom: 'string';

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
   prenom: 'string';

  @Length(8, 11)
  @IsNotEmpty()
   numeroTelephone: 'number';
}
