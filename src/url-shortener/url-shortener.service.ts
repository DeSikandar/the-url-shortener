import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { getUrl, setUrl } from './urlStore';
import { nanoid } from 'nanoid';
import * as dotenv from 'dotenv';
import { UrlDto } from './dto/urlDto';
import { UrlNotFoundException } from './exceptions/url-not-found.exception';

@Injectable()
export class UrlShortenerService {
  constructor() {
    dotenv.config();
  }

  encodeUrl(url: string): UrlDto {
    //generate shortid for the url
    const shortId = nanoid(11);

    //set the url in the store
    setUrl(shortId, url);
    const Url=new URL(process.env.baseUrl);
    Url.pathname=shortId;
    const shortUrl = Url.href;
    return {
      url: shortUrl,
    };
  }
  decodeUrl(url: string): UrlDto {
    const Url = new URL(url);
    const BaseUrl = new URL(process.env.baseUrl);

    //get the shortId from the url
    const shortId = Url.pathname.substring(1);

    //check the url contain the baseUrl
    if (Url.origin !== BaseUrl.origin) {
      throw new UrlNotFoundException('Url Not Found');
    }

    //get the url from the store using shortId
    const fullUrl = getUrl(shortId);
    if (!fullUrl) {
      throw new UrlNotFoundException('Url Not Found');
    }
    return {
      url: fullUrl,
    };
  }
}
