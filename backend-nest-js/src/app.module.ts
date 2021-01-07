import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import * as Joi from 'joi';    //joi가 타입스크립트가 아닌 js로 되어있는 패키지 이므로
import { join } from 'path';
import {ConfigModule} from '@nestjs/config'
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:process.env.NODE_ENV==="dev"?".env.dev":".env.dev",
      ignoreEnvFile:process.env.NODE_ENV==='prod',
      validationSchema:Joi.object({
        NODE_ENV:Joi.string().valid('dev', 'prod').required(),
        DB_HOST:Joi.string().required(),
        DB_PORT:Joi.string().required(),
        DB_USERNAME:Joi.string().required(),
        DB_PASSWORD:Joi.string().required(),
        DB_NAME:Joi.string().required(),
      }),

    }),
    // GraphQLModule.forRoot({
    //   autoSchemaFile: true
    // }),
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host":process.env.DB_HOST,
      "port":+process.env.PORT,
      "username":process.env.DB_USERNAME,
      "password":process.env.DB_PASSWORD,
      "database":process.env.DB_NAME,
      "synchronize": true,
      "logging": true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
