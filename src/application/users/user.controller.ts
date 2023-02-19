import { Body, Controller, Get, Post, Query, Redirect, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from '@app/application/users/user.service';
import { UserEntity } from '@app/application/users/user.entity';
import { CreateUserDto } from '@app/application/users/dto/createUser.dto'
import { LoginUserDto } from '@app/application/users/dto/loginUser.dto'
import { UserResponseInterface } from '@app/application/users/types/userResponse.interface'

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create_user')
  @UsePipes(new ValidationPipe())
  async createUser(
    @Body('user') createUserDto: CreateUserDto): Promise<UserResponseInterface> {    
    const user = await this.userService.createUser(createUserDto);  
    
    return this.userService.formUserCreateResponse(user);
  }

  @Post('login')
  async loginUser(
    @Body('user') loginUserDto: LoginUserDto): Promise<UserResponseInterface> {    
    const user = await this.userService.loginUser(loginUserDto);  
    
    return this.userService.formUserCreateResponse(user);
  }

  @Get('users_list')
  async findAll(): Promise<UserEntity[]> {
    return await this.userService.findAll();
  }

  @Get('redirect')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

}
