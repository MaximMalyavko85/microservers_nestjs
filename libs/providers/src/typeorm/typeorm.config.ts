import { DataSource, DataSourceOptions } from "typeorm";
import { config } from 'dotenv';
import { join } from "path";
import { ConfigService } from "@nestjs/config";

const configService = new ConfigService();

const NODE_ENV:string = configService.get<string>('NODE_ENV') || 'local';
const IS_PROD: boolean = NODE_ENV === 'prod';


config({path: join(process.cwd(), 'config', `.env.${NODE_ENV}`)});

const options = (): DataSourceOptions => {
    const url = configService.get('POSTGRE_HOST');
    
    if (!url) throw new Error('Database URL is empty');
    
    console.log(NODE_ENV, IS_PROD, url)

    return {
        type     : 'postgres',
        host     : configService.get('POSTGRE_HOST'),
        port     : configService.get('POSTGRE_PORT'),
        database : configService.get('POSTGRE_DB'),
        username : configService.get('POSTGRE_USER'),
        password : configService.get('POSTGRE_PASSWORD'),
        schema   : 'public',
        logging  : !IS_PROD,
        entities: [],
        migrations: [join(process.cwd()), 'migration', '**', '*migration.ts'],
        migrationsRun: true,
        migrationsTableName: 'migrations'
    }
} 

export const appDataSource = new DataSource(options())