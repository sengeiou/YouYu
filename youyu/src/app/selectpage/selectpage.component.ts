import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { AppBase } from '../AppBase';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { MainComponent } from '../main/main.component';
import { AgentApi } from 'src/providers/agent.api';
import { SimapiApi } from 'src/providers/simapi.api';

@Component({
  selector: 'app-selectpage',
  templateUrl: './selectpage.component.html',
  styleUrls: ['./selectpage.component.scss'],
  providers: [InstApi, MemberApi,SimapiApi]
})
export class SelectpageComponent extends AppBase {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public instApi: InstApi,
    public simapiApi: SimapiApi,
    public memberApi: MemberApi,
  ) {
    super(router, activeRoute, instApi, memberApi);
    this.isLoginPage=true;
  }
  info=null;
  simcardid='';

  onMyLoad() {
    this.params;
    this.simcardid=this.params.cardid;
  }
  onMyShow() {
     
  }

  chakan(){

    this.simapiApi.simcardinfo({simcard:this.simcardid}).then((ret:any)=>{
     this.info=ret;

     if(ret.code=="400"){
        this.toast("请输入正确的卡号");
     }
     console.log(this.info,'详情')
    })

  }
}