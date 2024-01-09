import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
//import { Gender } from "src/common/constants/gender.enum";
//import { Role } from "src/common/constants/role.enum";

export class UserDTO { // DTO for validation
    @ApiProperty()
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsString()
    userName: string;

    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty({
        //enum: Gender,
        //example: Gender.MALE
    })
    @IsString()
    gender: string;

    @ApiProperty({
        //enum: Role,
        //example: Role.USER
    })
    @IsString()
    role: string;
}

export class UserLoginDTO {
    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsString()
    password: string;
}

export class CreateUserDTO extends UserDTO {
    @ApiProperty()
    @IsString()
    password: string;
}

export class UpdateUserDTO extends UserDTO{
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsString()
    refreshToken: string;
}