import { IsEnum, IsInt, IsNumber, IsOptional, IsPositive, IsString, ValidateIf } from 'class-validator';
import { Type } from 'class-transformer';
import { toBoolean } from 'lib/utils';
import { NodeEnv } from './constants';

export class EnvironmentVariables {
  @IsOptional()
  @IsEnum(NodeEnv)
  readonly NODE_ENV: NodeEnv = NodeEnv.Development;

  @IsOptional()
  @IsNumber()
  readonly API_PORT: number = 3005;

  @IsOptional()
  @IsString()
  readonly API_HOST: string = '0.0.0.0';

  @IsOptional()
  @IsString()
  readonly CORS_ALLOWED_ORIGINS: string = '*';

  @IsOptional()
  @IsInt()
  readonly THROTTLER_TTL_S: number = 60;

  @IsOptional()
  @IsInt()
  readonly THROTTLER_LIMIT: number = 100;

  // default 20 MB
  @IsOptional()
  @IsInt()
  readonly MAX_FILE_SIZE_KB: number = 20 * 1024 * 1024;

  @Type(() => String)
  @IsString()
  readonly USE_LOGS: string = 'true';

  @Type(() => String)
  @IsString()
  readonly USE_SWAGGER: string = 'true';

  @ValidateIf(value => toBoolean(value.USE_SWAGGER))
  @IsString()
  readonly SWAGGER_ROUTE: string = '/swagger';

  @IsString()
  readonly TYPEORM_CONNECTION: 'mariadb';

  @IsString()
  readonly TYPEORM_HOST: string;

  @IsString()
  readonly TYPEORM_USERNAME: string;

  @IsString()
  readonly TYPEORM_PASSWORD: string;

  @IsString()
  readonly TYPEORM_DATABASE: string;

  @IsInt()
  @IsPositive()
  readonly TYPEORM_PORT: number;

  @Type(() => String)
  @IsString()
  readonly TYPEORM_SYNCHRONIZE: string = 'false';

  @Type(() => String)
  @IsString()
  readonly TYPEORM_LOGGING: string = 'false';

  @Type(() => String)
  @IsString()
  readonly TYPEORM_DEBUG: string = 'false';

  @IsString()
  readonly REDIS_HOST: string = 'localhost';

  @IsInt()
  readonly REDIS_PORT: number = 6379;

  @IsString()
  readonly REDIS_PREFIX: string = `${NodeEnv.Development}_`;
}
