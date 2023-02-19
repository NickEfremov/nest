import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    let a = process.env.NODE_ENV
    console.log(a)
    return "eee";
  }
}
