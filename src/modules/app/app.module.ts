import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { ConfigModule } from '@nestjs/config';
import { AcceptLanguageResolver, I18nModule } from 'nestjs-i18n';
import path from 'node:path';
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
      useFactory: async () => getConfig().typeORMConfig
    }),
    ThrottlerModule.forRoot(getConfig().basicConfig.throttlerConfig),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, './../../i18n/'),
        watch: true
      },
      resolvers: [AcceptLanguageResolver]
    })
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
