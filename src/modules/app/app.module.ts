import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';
import { getConnectionOptions } from 'typeorm';
import { getConfig, envValidation } from 'lib/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: envValidation,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true
      }
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const currentOptions = await getConnectionOptions();

        return {
          ...currentOptions,
          ...getConfig().typeORMConfig
        } as TypeOrmModuleOptions;
      }
    }),
    ThrottlerModule.forRoot(getConfig().basicConfig.throttlerConfig)
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ]
})
export class AppModule {}
