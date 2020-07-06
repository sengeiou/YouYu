import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { NgxUploaderModule } from 'ngx-uploader';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN,NZ_ICONS  } from 'ng-zorro-antd';
import { InstApi } from 'src/providers/inst.api';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { MemberApi } from 'src/providers/member.api';
import { SupportComponent } from '../support/support.component';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    SupportComponent,  
    ],
  imports: [
    CommonModule,
    FormsModule,
    MainRoutingModule,
    NgxUploaderModule,
    NgZorroAntdModule,
    NzUploadModule,
    NgxEchartsModule.forRoot({
      echarts
    })
  ],
  providers: [MemberApi, InstApi, { provide: NZ_I18N, useValue: zh_CN },{ provide: NZ_ICONS, useValue: zh_CN }],
})

export class MainModule { }
