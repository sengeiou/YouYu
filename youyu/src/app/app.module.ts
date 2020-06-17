import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainModule } from './main/main.module';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BlankComponent } from './blank/blank.component';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgxUploaderModule } from 'ngx-uploader';
import { UploadComponent } from './upload/upload.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { InstApi } from 'src/providers/inst.api';

import { MemberApi } from 'src/providers/member.api';
import { ContentComponent } from './content/content.component'; 
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SupportComponent } from './support/support.component';
import { APP_BASE_HREF } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { SimcardComponent } from './simcard/simcard.component';
import { AgentlistComponent } from './agentlist/agentlist.component';
import { AddagentComponent } from './addagent/addagent.component'; 
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LockscreenComponent,
    ListComponent,
    DetailComponent,
    BlankComponent,
    NotfoundComponent,
    UploadComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ContentComponent,
    SearchComponent,
    OrderlistComponent,
    SimcardComponent,
    AgentlistComponent,
    AddagentComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxUploaderModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    NzIconModule
  ],
  providers: [MemberApi, InstApi, { provide: NZ_I18N, useValue: zh_CN },{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
