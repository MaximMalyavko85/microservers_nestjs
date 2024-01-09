import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
//import { UsersModule } from '../users/users.module';
//import { TokenModule } from '../token/token.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "MS_USERS_SERVICES",
        transport: Transport.TCP,
        options: {
          host: "localhost",
          port: 7980
        }
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
