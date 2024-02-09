import { Module } from '@nestjs/common';
import { UsersController } from 'src/controllers';
import { UsersService } from 'src/services';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
