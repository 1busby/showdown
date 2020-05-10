import { NestMiddleware, Injectable } from '@nestjs/common';
import path from 'path';

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];

const resolvePath = (file: string) => path.resolve(`public/brackets-client${file}`);

@Injectable()
export class FrontendMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const { originalUrl } = req;
    console.log('FrontendMiddleware - originalUrl', JSON.stringify(originalUrl));
    if (originalUrl.indexOf('graphql') === 1) {
      // it starts with /api --> continue with execution
      next();
    } else if (allowedExt.filter(ext => originalUrl.includes(ext)).length > 0) {
      // it has a file extension --> resolve the file
      res.sendFile(resolvePath(originalUrl));
    } else {
      // in all other cases, redirect to the index.html!
      // res.sendFile(resolvePath('index.html'));
      res.sendFile(resolvePath('/index.html'));
    }
  }
}
