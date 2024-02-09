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
import ServerError from 'src/utils/serverError';

@Controller('auth/:id')
export class AuthController {
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

  @Post() createAuth(@Req() req: Request, @Res() res: Response): void {
    const { body, params } = req;
    const { id } = params;
    res.status(201).json({ id, body, pat: 'pat' });
  }

  @Put() updateAuth(
    @Body() body: any,
    @Param('id') id: number,
    @Res() res: Response,
  ): void {
    res.status(201).json({ id, body, pat: 'pat' });
  }
}
