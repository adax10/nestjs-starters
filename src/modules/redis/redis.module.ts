import { DynamicModule, Global, Module } from '@nestjs/common';
import { RedisOptions } from 'ioredis';
import { RedisService } from './redis.service';
import { REDIS_CONFIG_OPTIONS } from './constants';

@Global()
@Module({})
export class RedisModule {
  static register(options?: RedisOptions): DynamicModule {
    return {
      module: RedisModule,
      providers: [
        {
          provide: REDIS_CONFIG_OPTIONS,
          useValue: options
        },
        RedisService
      ],
      exports: [RedisService]
    };
  }
}
