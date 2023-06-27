import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

import { EmployeeModule } from './employee.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/employee'),
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
