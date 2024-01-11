import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService as CS } from '@nestjs/config';
import { ProvidersModule } from '@lib/providers/providers.module';
import { SharedModule } from '@lib/shared';
import { ApiModule } from '../api';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    SharedModule,
    ProvidersModule,
    ApiModule
  ], 
})
export class AppModule {}