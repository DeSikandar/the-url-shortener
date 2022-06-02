import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class UrlDto {
  @IsNotEmpty()
  @IsString()
  @IsUrl({ require_tld: false })
  url: string;
}
