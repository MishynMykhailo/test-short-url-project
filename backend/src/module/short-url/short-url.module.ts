import { Module } from '@nestjs/common';
import { ShortUrlController } from './short-url.controller';
import { ShortUrlService } from './short-url.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { shortUrlModel } from 'src/models/shortUrl.model';

@Module({
  imports: [SequelizeModule.forFeature([shortUrlModel])],
  controllers: [ShortUrlController],
  providers: [ShortUrlService],
})
export class ShortUrlModule {}
