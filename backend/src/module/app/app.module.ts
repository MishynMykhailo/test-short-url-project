import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from '../../configuration/';
import { shortUrlModel } from 'src/models/shortUrl.model';
import { ShortUrlModule } from '../short-url/short-url.module';

@Module({
  imports: [
    ShortUrlModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: 'postgres', // Какую базу подключили
        synchronize: true,
        autoLoadModels: true,
        models: [shortUrlModel], //Модель которую добавляем
        ...configService.get('database'), // Данные для подключения к BD
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
