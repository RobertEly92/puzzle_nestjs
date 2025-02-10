import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuzzlesModule } from './puzzles/puzzles.module';
import databaseConfig, { CONFIG_DATABASE } from './config/database.config';


//TODO env Datei für Mongo nutzen!
@Module({
  imports: [
    PuzzlesModule,
    ConfigModule.forRoot({
      load: [databaseConfig],
      envFilePath: '.env',
      isGlobal: true,
    }),
  /*  MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get(CONFIG_DATABASE).puzzles.uri,
        };
      },
      inject: [ConfigService],
    })*/
   MongooseModule.forRoot('mongodb://localhost:27017')
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
