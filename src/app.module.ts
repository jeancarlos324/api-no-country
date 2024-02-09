import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core';
import { AuthModule, UsersModule } from './modules';
import { UsersController } from './controllers/users/users.controller';
import { MorganMiddleware } from '@nest-middlewares/morgan';
import { AuthController } from './controllers/auth/auth.controller';
import { CorsMiddleware, ErrorMiddleware } from './middlewares';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, UsersController, AuthController],
  providers: [AppService, { provide: APP_FILTER, useClass: ErrorMiddleware }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    MorganMiddleware.configure('dev');
    consumer.apply(MorganMiddleware).forRoutes('*');
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
