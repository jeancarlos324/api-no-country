import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { AuthService } from 'src/services/auth/auth.service';
dotenv.config();
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_VALUE,
      signOptions: { algorithm: 'HS512' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
