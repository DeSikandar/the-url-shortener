import { NotFoundException } from '@nestjs/common';

export class UrlNotFoundException extends NotFoundException {
  constructor(error?: string) {
    super('error.urlNotFound', error);
  }
}
