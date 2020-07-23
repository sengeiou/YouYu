import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { AppBase } from '../AppBase';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { MainComponent } from '../main/main.component';
import { AgentApi } from 'src/providers/agent.api';
import { AppUtil } from '../app.util';
@Component({
  selector: 'app-wendang',
  templateUrl: './wendang.component.html',
  styleUrls: ['./wendang.component.scss'],
  providers: [InstApi, MemberApi, AgentApi]
})
export class WendangComponent extends AppBase {

  
   
  constructor(
    public router: Router,
    private routeInfo:ActivatedRoute,
    public activeRoute: ActivatedRoute,
    public instApi: InstApi,
    public agentApi: AgentApi,
    public memberApi: MemberApi,
  ) {
    super(router, activeRoute, instApi, memberApi);

  }
  type = null;
  shensu='';
  content='';
  wdtype='';
  //wenjian=null;
  onMyLoad() {
    this.params; 

  }
  ngOnInit(){
    console.log(this.params,'快乐健康')
  }

  onMyShow() {
    if (MainComponent.Instance != null) {
    //  MainComponent.Instance.setModule("wd", "wendang");
    }
      this.wdtype=this.params.wdtype;
      console.log(this.wdtype,'参数')
    
    this.agentApi.wendang({}).then((res:any)=>{
        this.content=res.content;
        this.content=AppUtil.HtmlDecode(res.content);
       console.log(res.status,'文档')
    })
  }
 

  
 

}