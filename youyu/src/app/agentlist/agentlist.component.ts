import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { AppBase } from '../AppBase';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { AgentApi } from 'src/providers/agent.api';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-agentlist',
  templateUrl: './agentlist.component.html',
  styleUrls: ['./agentlist.component.scss'],
  providers: [InstApi, MemberApi,AgentApi]
})
export class AgentlistComponent extends AppBase {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public instApi: InstApi,
    public agentApi: AgentApi,
    public memberApi: MemberApi,
  ) {
    super(router, activeRoute, instApi, memberApi); 
  }
  type="";
  check=false;
  agentlist=[];
  onMyLoad() {
    this.params;
  }
  onMyShow() {
    if (MainComponent.Instance != null) {
      MainComponent.Instance.setModule("agent", "agentlist");
    }

    this.agentApi.agentlist({ 

    }).then((res:any)=>{
        this.agentlist=res;
        console.log(this.agentlist);
    })
  }

  ordertype(type){
    this.type=type;
  }

  detail(id){
    this.navigate('/addagent', { id: id,type:'B' })
  }

  choose(){
  if(this.check==false){
   this.check=true;
  }else{
    this.check=false;
  }
  }
}