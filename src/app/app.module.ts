import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { AddMemberPage } from '../pages/add-member/add-member';
import { MemberService } from './member.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    AddMemberPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemDetailsPage,
    AddMemberPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MemberService]
})
export class AppModule { }
