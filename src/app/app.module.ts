import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { ShiftRPage} from '../pages/shift-r/shift-r';
import { ReportsPage} from '../pages/reports/reports';
import { CreateRPage} from '../pages/create-r/create-r';
import {Storage} from '@ionic/storage';
//import { TasksPage} from '../pages/tasks/tasks';
import { CreateTPage} from '../pages/create-t/create-t';
import {TasklistPage} from '../pages/tasklist/tasklist'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    ShiftRPage,
	ReportsPage,
	CreateRPage,
  CreateTPage,
  TasklistPage
  
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	SignupPage,
    ShiftRPage,
	ReportsPage,
	CreateRPage,
  CreateTPage,
  TasklistPage
  ],
  providers: [Storage,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
