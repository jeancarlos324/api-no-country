import { Controller, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from 'src/services';

@Controller('users')
export class UsersController {
  private UsersService: UsersService;
  constructor(UsersService: UsersService) {
    this.UsersService = UsersService;
  }
  @Get() async findUsers(@Res() res: Response) {
    const result = await this.UsersService.find();
    res.status(HttpStatus.ACCEPTED).json(result);
  }
  @Post() async createUser(@Req() req: Request, @Res() res: Response) {
    const { body } = req;
    const passwordHash = await this.UsersService.create(body);
    res.status(HttpStatus.ACCEPTED).json(passwordHash);
  }
}
