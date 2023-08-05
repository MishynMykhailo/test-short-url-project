import {
  Controller,
  Get,
  Delete,
  Post,
  Body,
  Param,
  Res,
} from '@nestjs/common';
import { ShortUrlService } from './short-url.service';
import { Response } from 'express';
import { createOriginalUrlDTO } from './dto';

@Controller('shortUrl')
export class ShortUrlController {
  constructor(private readonly shortUrlService: ShortUrlService) {}

  @Post()
  async createNewShortUrl(@Body() originalUrl: createOriginalUrlDTO) {
    console.log(originalUrl);
    return await this.shortUrlService.createNewShortUrl(originalUrl);
  }

  @Get(':shortUrl')
  async redirectFromShortUrl(
    @Param('shortUrl') shortUrl: string,
    @Res() res: Response,
  ) {
    const result = await this.shortUrlService.redirectShortUrl(shortUrl);
    if (result) {
      res.redirect(result.originalUrl);
    } else {
      res.status(404).send('Short URL not found');
    }
  }
  @Get()
  async getAllUrl() {
    const result = await this.shortUrlService.getAllUrl();
    return result;
  }

  @Delete(':id')
  async deleteById(@Param('id') id: number) {
    return await this.shortUrlService.deleteById(id);
  }
}
