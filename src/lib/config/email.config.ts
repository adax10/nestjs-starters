import { EnvironmentVariables } from './environment.variables';

export const emailConfig = (configEnvs: EnvironmentVariables) => ({
  service: configEnvs.EMAIL_SERVICE,
  host: configEnvs.EMAIL_HOST,
  user: configEnvs.EMAIL_USER,
  password: configEnvs.EMAIL_PASSWORD
});
