import { DataSource, DataSourceOptions } from "typeorm";
import { config } from 'dotenv';
import { join } from "path";
import { ConfigService } from "@nestjs/config";

const configService = new ConfigService();

const NODE_ENV:string = configService.get<string>('NODE_ENV') || 'local';
const IS_PROD: boolean = NODE_ENV === 'prod';


config({path: join(process.cwd(), 'config', `.env.${NODE_ENV}`)});

const options = (): DataSourceOptions => {
    const host     = configService.get('POSTGRE_HOST');
    const port     =  configService.get('POSTGRE_PORT');
    const database = configService.get('POSTGRE_DB');
    const username = configService.get('POSTGRE_USER');
    const password = configService.get('POSTGRE_PASSWORD');
    
    if (!host || !port || !database || !username || !password) throw new Error('Database options was skiped.');

    return {
        host,
        port, 
        database,
        username, 
        password,
        type                : 'postgres',
        schema              : 'public',
        logging             : !IS_PROD,
        entities            : [join(process.cwd(), 'dist', 'libs', 'entities', '**', '*.entity.{ts, js}')],
        migrations          : [join(process.cwd()), 'migration', '**', '*migration.ts'],
        migrationsRun       : true,
        migrationsTableName : 'migrations'
    }
} 

export const appDataSource = new DataSource(options())