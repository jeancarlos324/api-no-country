import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserSesion } from 'src/types/types';
import ServerError from 'src/utils/serverError';

@Injectable()
export class AuthService {
  private jwtServices: JwtService;
  constructor(jwtServices: JwtService) {
    this.jwtServices = jwtServices;
  }

  public async singIn({ username, password }: UserSesion) {
    const user = { userId: 1, password: '1234', username: 'admin' };
    if (user.password !== password)
      throw new ServerError('Contraseña Incorrecta', 'NOT_FOUND');
    const data = { sub: user.userId, username: user.username };
    return await this.jwtServices.signAsync(data);
  }
}
