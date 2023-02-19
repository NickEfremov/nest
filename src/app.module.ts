import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from "@app/ormconfig";
import { UserModule } from '@app/application/users/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [".env"], isGlobal: true }),
    TypeOrmModule.forRoot(ormconfig), 
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
