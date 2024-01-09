import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService as CS } from '@nestjs/config';



export class Connector {
  constructor() { }

  connect(configService: CS): TypeOrmModuleOptions {
      return {
            type     : 'postgres',
            host     : configService.get('POSTGRE_HOST'),
            port     : configService.get('POSTGRE_PORT'),
            database : configService.get('POSTGRE_DB'),
            username : configService.get('POSTGRE_USER'),
            password : configService.get('POSTGRE_PASSWORD'),
            entities: [],
            synchronize: true,
            //logging: true,
      }
    }
}
