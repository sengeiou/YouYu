import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { AppBase } from '../AppBase';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { MainComponent } from '../main/main.component';
import { AgentApi } from 'src/providers/agent.api';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  providers: [InstApi, MemberApi,AgentApi]
})
export class ApplicationComponent extends AppBase {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public instApi: InstApi,
    public memberApi: MemberApi,
    public agentApi: AgentApi,
  ) {
    super(router, activeRoute, instApi, memberApi); 
  }
  type="";
  check=false;
  shenqing=[];
  name='';
  onMyLoad() {
    this.params;
  }
  onMyShow() {
    if (MainComponent.Instance != null) {
      MainComponent.Instance.setModule("agent", "application");
    }

    this.agentApi.shenqing({ 

    }).then((res:any)=>{
        this.shenqing=res;
        this.pagination(res, res.length);
        console.log(this.shenqing,'数据');
    })
  }

  tongyi(id){
    this.agentApi.tongyi({  
       id:id, 
      }).then((res:any)=>{
         this.pageList=[];
         this.onMyShow();
      })
  }

  search(){
    this.pageList = [];
    this.agentApi.shenqing({ 
    name:this.name
    }).then((res:any)=>{
        this.shenqing=res;
        this.pagination(res, res.length);
        console.log(this.shenqing,'数据');
    })
  }
  reset(){
    this.name=""; 
  }


}