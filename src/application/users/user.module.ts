import { Module } from '@nestjs/common';
import { UserController } from '@app/application/users/user.controller';
import {UserService} from '@app/application/users/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '@app/application/users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
