import { Controller, Get } from '@nestjs/common';
import { UserService } from '@app/application/user/user.service';
import { UserEntity } from '@app/application/user/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }
}
