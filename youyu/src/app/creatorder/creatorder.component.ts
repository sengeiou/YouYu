import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { AppBase } from '../AppBase';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { MainComponent } from '../main/main.component';
import { AgentApi } from 'src/providers/agent.api';
@Component({
  selector: 'app-creatorder',
  templateUrl: './creatorder.component.html',
  styleUrls: ['./creatorder.component.scss'],
  providers: [InstApi, MemberApi,AgentApi]
})
export class CreatorderComponent extends AppBase {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public instApi: InstApi,
    public memberApi: MemberApi,
    public agentApi: AgentApi,
  ) {
    super(router, activeRoute, instApi, memberApi);

  }
  quota=0;
  agentlist=[];
  agent2_id='';
  remarks='';
  onMyLoad() {
    this.params;
  }
  onMyShow() {

    this.agentApi.agentlist({ 

    }).then((ret:any)=>{
        this.agentlist=ret;
        this.pagination(ret, ret.length);
        console.log(this.agentlist);
    })
    // if (MainComponent.Instance != null) {
    //   MainComponent.Instance.setModule("sim", "addagent");
    // }
  }

  confirm() {
    // if (this.list.name.trim() == '') {
    //   this.toast("请填写代理商名称");
    //   return
    // }

    console.log(this.agent2_id);
    //return;
    if(this.agent2_id.trim()==""){
      this.toast("请选择需要分配的代理商");
      return
    }
    if (this.quota==0) {
      this.toast("请输入分配额度");
      return
    }
  
    this.agentApi.addfenpei({quota:this.quota,agent2_id:this.agent2_id,remarks:this.remarks}).then((ret: any) => {
      console.log(ret);
      if (ret.code == '0') {
        this.saveing();
        // this.primary_id=res.return; 
        this.back(); 
      } else {
        this.toast(ret.result);
      }
    })

  }
}