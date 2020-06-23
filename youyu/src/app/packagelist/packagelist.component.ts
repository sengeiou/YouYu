import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { AppBase } from '../AppBase';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { MainComponent } from '../main/main.component';
import { AgentApi } from 'src/providers/agent.api';

@Component({
  selector: 'app-packagelist',
  templateUrl: './packagelist.component.html',
  styleUrls: ['./packagelist.component.scss'],
  providers: [InstApi, MemberApi,AgentApi]
})
export class PackagelistComponent extends AppBase {

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
  packagelist=[];
  name='';
  onMyLoad() {
    this.params;
  }
  onMyShow() { 
    if (MainComponent.Instance != null) {
      MainComponent.Instance.setModule("packagelist", "packagelist");
    }

    this.agentApi.packagelist({ 

    }).then((res:any)=>{
        this.packagelist=res;
        this.pagination(res, res.length);
        console.log(this.packagelist,'数据');
    })
  }

  search(){
    // this.pageList = [];
    // this.agentApi.fenpeilist({  
    //  name:this.name, 
    // }).then((res:any)=>{
    //     this.fenpeilist=res;
    //     this.pagination(res, res.length);
    //     console.log(this.fenpeilist);
    // })
  }
  reset(){
   // this.name=""; 
  }

  ordertype(type){
    //this.type=type;
  }

  choose(){
  // if(this.check==false){
  //  this.check=true;
  // }else{
  //   this.check=false;
  // }
  }

}