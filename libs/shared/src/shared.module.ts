import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AllexceptionsFilter } from './filters';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllexceptionsFilter
    }
  ],
  exports: [],
})
export class SharedModule {}
