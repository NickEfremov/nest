import { IsEmail, IsNotEmpty } from "class-validator";
import { Column } from "typeorm";

export class CreateUserDto {
    @IsNotEmpty()
    readonly firstName: string;

    @IsNotEmpty()
    readonly lastName: string;

    @IsNotEmpty()
    readonly password: string;
    
    @IsNotEmpty()
    @IsEmail()
    @Column({unique: true})
    readonly email: string;

    @IsNotEmpty()
    readonly username: string;
}