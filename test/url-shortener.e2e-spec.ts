import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { UrlShortenerService } from '../src/url-shortener/url-shortener.service';

describe('UrlShortenerController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  beforeEach(async () => {
    UrlShortenerService.prototype.encodeUrl = jest
      .fn()
      .mockReturnValue({ url: 'http://localhost:3000/VlWrE5LEbsT' });
    UrlShortenerService.prototype.decodeUrl = jest
      .fn()
      .mockReturnValue({ url: 'https://www.google.com' });
  });

  it('/encode (POST)', () => {
    return request(app.getHttpServer())
      .post('/encode')
      .send({ url: 'https://www.google.com' })
      .expect(201)
      .expect({
        url: 'http://localhost:3000/VlWrE5LEbsT',
      });
  });

  it('/decode (POST)', () => {
    return request(app.getHttpServer())
      .post('/decode')
      .send({ url: 'http://localhost:3000/VlWrE5LEbsT' })
      .expect(201)
      .expect({
        url: 'https://www.google.com',
      });
  });
});
