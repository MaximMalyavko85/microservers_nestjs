import { Module } from '@nestjs/common';
import { Connector } from '../../common/database';
import { ConfigService } from '../../../config';
import { ConfigModule, ConfigService as CS } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthModule } from '../auth/auth.module';
import { ProvidersModule } from '@lib/providers';



//module - для разделения все на части
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    ProvidersModule,
    // ConfigModule.forRoot( // forRoot - global view
    //   new ConfigService().getConfig()  // for .env
    // ),
    // TypeOrmModule.forRootAsync({
    //   useFactory: (config: CS)=> new Connector().connect(config),
    //   inject: [CS],
    // }),
    //AuthModule
  ], // сюда должны быть импортированы другие модули, чтобы получилось дерево зависимостей
  controllers: [], // сюда все контроллеры, которые относятся именно к этому модулю
  providers: [], // все, что не является контроллером, но, нам надо положить его в дерево зависимостей
  exports: [], // все, что мы экспортируем (провайдер, который будет доступен в других модулях)
})
export class AppModule {}


//ConfigModule.forRoot() method registers the ConfigService provider which provides a get() method to read the environment variables.
//Dependency injection is an inversion of control (IoC) technique wherein you delegate instantiation of dependencies to the IoC container (in our case, the NestJS runtime system), 
//instead of doing it in your own code imperatively. Let's examine what's happening in this example from the Providers chapter.
    //- First, we define a provider. The @Injectable() decorator marks the SomeService class as a provider.
    //- Then we request that Nest inject the provider into our controller class: constructor(private someService: SomeService) {}
    //- Finally, we register the provider with the Nest IoC container: @Module({providers: [CatsService],})
