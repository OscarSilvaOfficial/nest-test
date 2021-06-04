import { Controller, Get, HostParam, Param, Query, Redirect, Req } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request) {
    return request.httpVersion
  }

  @Get('/google')
  @Redirect('https://google.com')
  redirectToGoogle() {
    return 
  }

  @Get('/query')
  getQuery(@Query() query) {
    return query
  }

  @Get('params/:id')
  findOne(@Param() params): string {
    console.log(params)
    return `This action returns a ${JSON.stringify(params)}`;
  }

  @Get('/host')
  getInfo(@HostParam() account: string) {
    return account;
  }
}
