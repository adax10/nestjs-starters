import { Injectable } from '@nestjs/common';
import { CacheKeys } from 'lib/config';
import { RedisService } from 'modules/redis';

@Injectable()
export class ExampleService {
  constructor(private readonly redisService: RedisService) {}

  async example() {
    const redisKey = CacheKeys.ExampleKey;
    const cacheExample = await this.redisService.get(redisKey);

    if (cacheExample) {
      return cacheExample;
    }

    const example = 'Hello world!';

    this.redisService.set(redisKey, example);

    return example;
  }
}
