import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { shortUrlModel } from 'src/models/shortUrl.model';
import { createOriginalUrlDTO } from './dto';
import { nanoid } from 'nanoid';

@Injectable()
export class ShortUrlService {
  constructor(
    @InjectModel(shortUrlModel)
    private readonly shortUrlRepository: typeof shortUrlModel,
  ) {}
  // find shortUrl by id
  private async findNoteById(id: number) {
    return await this.shortUrlRepository.findByPk(id);
  }
  // Get all short-url
  async getAllUrl() {
    return this.shortUrlRepository.findAll();
  }
  // Create new short-url
  async createNewShortUrl(
    originalUrl: createOriginalUrlDTO,
  ): Promise<createOriginalUrlDTO> {
    const newUrl = {
      originalUrl: originalUrl.originalUrl,
      shortUrl: nanoid(6),
    };
    await this.shortUrlRepository.create(newUrl);
    return newUrl;
  }

  // Redirect with shortUrl on originalUrl
  async redirectShortUrl(shortUrl: string): Promise<shortUrlModel | null> {
    const result = await this.shortUrlRepository.findOne({
      where: { shortUrl: shortUrl },
    });
    return result;
  }

  // Delete shortUrl
  async deleteById(id: number) {
    const existingNote = await this.findNoteById(id);
    if (!existingNote) {
      throw new Error('Not found');
    }
    await this.shortUrlRepository.destroy({ where: { id: id } });
    return { message: `ShortLink with ID '${id}' deleted` };
  }
}
