import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { AppBase } from '../AppBase';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api'; 
import { AgentApi } from 'src/providers/agent.api';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [InstApi, MemberApi,AgentApi]
})
export class MainComponent extends AppBase {
  static Instance: MainComponent = null;
  instinfo = null;
  toggle = false;
  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public instApi: InstApi,
    public memberApi: MemberApi,
    public agentApi: AgentApi,
  ) {
    super(router, activeRoute, instApi, memberApi);
    this.instinfo = {};
    this.instApi.info({ unicode: "talentSaaS" }).then((instinfo) => {
      this.instinfo = instinfo;
    });
    MainComponent.Instance = this;
  }


  module = "home";
  module2 = "";
   

  onMyLoad() {

  }

  newhuman = 0;
  neworder = 0;
  shenqingshu=0;
  onMyShow() {
    var today = new Date();
    var timespan = today.getTime();



    var time=setInterval(()=>{
      this.agentApi.shenqing({shenqingstatus:'A'}).then((ret:any)=>{ 
        this.shenqingshu=ret.length;  
      })
    },2000)
    
    if (this.memberinfo != null
      &&
      this.memberinfo.expireddatetimespan / 24 / 3600 / 1000 - timespan / 24 / 3600 / 1000 < 30) {
      this.warning("Account Expired", "Your license would be expired in " + this.memberinfo.manpower.expired_date + ", please content support to update your license.");
    }
  }


  setModule(module, module2) {
    this.module = module;
    this.module2 = module2;
    this.refreshSummary();
    console.log("列表",module,module2)
  }

  
  recentunreadlist = [];
  infoboxsummary = {
    unreadcount: 0
  };
  searchkey = "";

  searchkeyquicklist = [];


  refreshSummary() {
    this.searchkey=""; 
  }

  toggleSidebar() {
    console.log('jjjjjj')
    this.toggle = !this.toggle;

  }
  changlan(val) {
    console.log(val, '123123')
    window.localStorage.setItem("langcode", val);
    window.location.reload();
  }
  getSearchList(key){
    var list=[];
     
    return list;
  }

}
