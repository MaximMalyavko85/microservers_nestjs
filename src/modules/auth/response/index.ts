import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsString } from "class-validator";
//import { Gender } from "src/common/constants/gender.enum";
//import { Role } from "src/common/constants/role.enum";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";

export class UserResponse {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty({
       // enum: Role,
        //example: Role.USER
    })
    @IsString()
    role: string;

    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty({
        //enum: Gender,
        //example: Gender.MALE
    })
    @IsString()
    gender: string;

    @ApiProperty()
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsString()
    userName: string;   

    @ApiProperty()
    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @ApiProperty()
    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
}

export class AuthUserResponse {
    @ApiProperty()
    user: UserResponse;

    @ApiProperty()
    @IsString()
    accessToken: string;
}

// export class UserResponseWithWatchlist extends UserResponse{
//     @ApiProperty()
//     @IsArray()
//     //watchList: WatchList[];
// }