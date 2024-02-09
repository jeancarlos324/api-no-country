import { Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersService } from 'src/services';

@Controller('users')
export class UsersController {
  private UsersService: UsersService;
  constructor(UsersService: UsersService) {
    this.UsersService = UsersService;
  }
  @Post() async createUser(@Req() req: Request, @Res() res: Response) {
    const { body } = req;
    const passwordHash = await this.UsersService.create(body);
    res.status(HttpStatus.ACCEPTED).json(passwordHash);
  }
}
