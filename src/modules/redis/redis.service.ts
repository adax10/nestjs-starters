import { Inject, Injectable } from '@nestjs/common';
import Redis, { RedisOptions } from 'ioredis';
import { REDIS_CONFIG_OPTIONS } from './constants';

@Injectable()
export class RedisService {
  private readonly redisClient;

  constructor(@Inject(REDIS_CONFIG_OPTIONS) private options: RedisOptions) {
    this.redisClient = new Redis(this.options);
  }

  get(key: string) {
    return this.redisClient.get(key);
  }

  set(key: string, value: string) {
    return this.redisClient.set(key, value);
  }

  del(keys: Array<string>) {
    return this.redisClient.del(keys);
  }

  searchKeys(pattern: string) {
    return this.redisClient.keys(pattern);
  }
}
