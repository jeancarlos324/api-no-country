import { Injectable } from '@nestjs/common';
import { UserSesion } from 'src/types/types';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entity/user.entity';

@Injectable()
export class UsersService {
  private saltOrRounds: number = 10;

  constructor() // private readonly userModel: typeof User, // @InjectModel(User)
  {}

  public async find() {
    const result = await User.findAll();
    return result;
  }
  public async create({ password, username }: UserSesion) {
    const hash = await bcrypt.hash(password, this.saltOrRounds);
    return { username, hash };
  }
}
