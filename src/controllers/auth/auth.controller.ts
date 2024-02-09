import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from 'src/services/auth/auth.service';
import ServerError from 'src/utils/serverError';

@Controller('auth/login')
export class AuthController {
  constructor(private AuthService: AuthService) {}
  @Get()
  getAuthInfo(
    @Param('id') id: string,
    @Query() queries: { [key: string]: any },
    @Res() res: Response,
  ): void {
    const statusBoolean = false;
    if (statusBoolean)
      throw new ServerError('Error de prueba no identificado', 'BAD_REQUEST');
    const jsonData = { message: 'Hola leilin', id, queries };
    res.status(200).json(jsonData);
  }

  @Post() async createAuth(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<void> {
    const { body } = req;
    const token = await this.AuthService.singIn(body);
    res.status(200).json({ token });
  }

  @Put() updateAuth(
    @Body() body: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): void {
    res.status(201).json({ id, body, pat: 'pat' });
  }
}
