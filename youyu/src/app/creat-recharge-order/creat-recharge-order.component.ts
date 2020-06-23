import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { AppBase } from '../AppBase';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { MainComponent } from '../main/main.component';
import { AgentApi } from 'src/providers/agent.api';
@Component({
  selector: 'app-creat-recharge-order',
  templateUrl: './creat-recharge-order.component.html',
  styleUrls: ['./creat-recharge-order.component.scss'],
  providers: [InstApi, MemberApi,AgentApi]
})
export class CreatRechargeOrderComponent extends AppBase {

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
  packagelist=[];
  simcardlist=[];
  simcard_id='';
  package_id='';
  remarks='';
  onMyLoad() {
    this.params;
  }
  onMyShow() {

    this.agentApi.packagelist({ 

    }).then((ret:any)=>{
        this.packagelist=ret;
        console.log(this.packagelist);
    })

    this.agentApi.simcardlist({ 

    }).then((ret:any)=>{
        this.simcardlist=ret; 
    })
    
  }

  confirm() {
     

    
    //return;
    if(this.simcard_id.trim()==""){
      this.toast("请选择需要充值的SIM卡");
      return
    }
    if (this.package_id.trim()=="") {
      this.toast("请选择充值套餐");
      return
    }
     
    this.agentApi.creatorder({ simcard_id:this.simcard_id,package_id:this.package_id,remarks:this.remarks}).then((ret: any) => {
      console.log(ret);
      if (ret.code == '0') {
        this.saveing();
 
        this.back(); 
      } else {
        this.toast(ret.result);
      }
    })

  }
}
