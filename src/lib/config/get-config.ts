import { plainToInstance } from 'class-transformer';
import { typeORMConfig } from 'database';
import { EnvironmentVariables } from './environment.variables';
import { basicConfig } from './basic-config';
import { redisConfig } from './redis.config';

export const getConfig = () => {
  const configEnvs = plainToInstance(EnvironmentVariables, process.env, { enableImplicitConversion: true });

  return {
    basicConfig: basicConfig(configEnvs),
    typeORMConfig: typeORMConfig(configEnvs),
    redisConfig: redisConfig(configEnvs)
  };
};
