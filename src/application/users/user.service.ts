import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserEntity } from '@app/application/users/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '@app/application/users/dto/createUser.dto'
import { sign } from 'jsonwebtoken';
import { SECRET_JWT } from '@app/env';
import { UserResponseInterface } from './types/userResponse.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) 
    private readonly userRepository: Repository<UserEntity>
    ) {}
    
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const userByEmail = await this.userRepository.findOne({ 
      where : {
       email: createUserDto.email,
      }
    });

    if (userByEmail) {
      throw new HttpException(
        'Email or username are taken',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }
    const newUser = new UserEntity();
    Object.assign(newUser, createUserDto);

    return await this.userRepository.save(newUser);
  }

  generateJWT(user: UserEntity): string {
    return sign({
      id: user.id,
      username: user.username,
      email: user.email
    },
    SECRET_JWT  
    );
  }

  formUserCreateResponse(user: UserEntity): UserResponseInterface {
    return {
      user: {
        ...user,
        token: this.generateJWT(user)
      }
    }
  }
}
