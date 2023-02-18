import { plainToInstance } from 'class-transformer';
import { typeORMConfig } from 'database';
import { basicConfig } from './basic-config';
import { EnvironmentVariables } from './environment.variables';

export const getConfig = () => {
  const configEnvs = plainToInstance(EnvironmentVariables, process.env, { enableImplicitConversion: true });

  return {
    basicConfig: basicConfig(configEnvs),
    typeORMConfig: typeORMConfig(configEnvs)
  };
};
