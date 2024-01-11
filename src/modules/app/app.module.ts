import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService as CS } from '@nestjs/config';
import { ProvidersModule } from '@lib/providers/providers.module';
import { SharedModule } from '@lib/shared';
import { ApiModule } from '../api';
import { DomainsModule } from '../domains/domains.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    SharedModule,
    ProvidersModule,
    ApiModule,
    DomainsModule
  ], 
})
export class AppModule {}