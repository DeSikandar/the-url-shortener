import { Body, Controller, Get, Post } from '@nestjs/common';
import { UrlDto } from './dto/urlDto';
import { UrlShortenerService } from './url-shortener.service';

@Controller()
export class UrlShortenerController {
  constructor(private readonly urlShortenerService: UrlShortenerService) {}

  @Post('/encode')
  encodeUrl(@Body() data: UrlDto): UrlDto {
    return this.urlShortenerService.encodeUrl(data.url);
  }

  @Post('/decode')
  decodeUrl(@Body() data: UrlDto): UrlDto {
    return this.urlShortenerService.decodeUrl(data.url);
  }
}
