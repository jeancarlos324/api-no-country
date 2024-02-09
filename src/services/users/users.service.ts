import { Injectable } from '@nestjs/common';
import { UserSesion } from 'src/types/types';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private saltOrRounds: number;
  constructor() {
    this.saltOrRounds = 10;
  }
  public async create({ password, username }: UserSesion) {
    const hash = await bcrypt.hash(password, this.saltOrRounds);
    return { username, hash };
  }
}
