import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { AppBase } from '../AppBase';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { MainComponent } from '../main/main.component';
import { AgentApi } from 'src/providers/agent.api';

@Component({
  selector: 'app-simcard',
  templateUrl: './simcard.component.html',
  styleUrls: ['./simcard.component.scss'],
  providers: [InstApi, MemberApi, AgentApi]
})
export class SimcardComponent extends AppBase {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public instApi: InstApi,
    public memberApi: MemberApi,
    public agentApi: AgentApi,
  ) {
    super(router, activeRoute, instApi, memberApi);

  }
  type = "";
  check = false;
  simcardlist = [];
  idno = '';
  allchose=false;
  datajson=[];
  agentlist=[];
  agent_id='';
  sim_id='';
  idlist=[];
  fenpeitype='';
  onMyLoad() {
    this.params;
  }
  onMyShow() {
    if (MainComponent.Instance != null) {
      MainComponent.Instance.setModule("sim", "simcard");
    }
    this.pageList = [];
    this.agentApi.agentlist({  
    }).then((ret:any)=>{
        this.agentlist=ret; 
        console.log(this.agentlist);
    })

  this.simcard();
  }

  simcard(){
    this.agentApi.simcardlist({ 
    }).then((res: any) => { 
      for (var i = 0; i < res.length; i++) {
        res[i].checking = false;
      } 
      this.simcardlist = res; 
      this.pagination(res, res.length);
      console.log(this.simcardlist);
    })
  }
  chooseagent(id){
   this.sim_id=id;
   this.fenpeitype='A';
  }

  fenpei() {
    this.idlist=[];
    if(this.agent_id.trim()==""){
      this.toast("请选择需要分配的代理商");
      return
    }

    // console.log(this.fenpeitype);
    // return;

    if(this.fenpeitype=="A"){
      var list={id:this.sim_id,agent_id:this.agent_id};
      this.idlist.push(list);
    }else{
      for(var i=0;i<this.simcardlist.length;i++){
        if(this.simcardlist[i].checking==true){
         var list2={id:this.simcardlist[i].id,agent_id:this.agent_id};
         this.idlist.push(list2);
        } 
     }
     
    }
    console.log(this.idlist);
    //return;
 
    var datajson=JSON.stringify(this.idlist);
    console.log('sim:'+this.sim_id+'---'+'agent:'+this.agent_id)
    this.agentApi.fenpei({
      datajson:datajson
    }).then((res: any) => {
      this.simcard();
    })
    
  }
  piliang(){
    this.fenpeitype='B';
  }

  search() {

  }

  reset() {

  }

  ordertype(type) {
    this.type = type;
  }
  
  chooseone(i,item) {
    console.log(item)
      
    item.checking = !item.checking;

    if (item.checking == false) {
      this.allchose = false;
    }
    if (!this.chch()) {
      this.allchose = true;
    }
      
  }
  chooseall() {
    this.allchose = !this.allchose;
    if (this.allchose == true) {
      for (let item of this.simcardlist) {
        item.checking = true;
      }
    } else {
      for (let item of this.simcardlist) {
        item.checking = false;
      }
    }
  }
 

  chch() {
    for (let item of this.simcardlist) {
      if (item.checking == false) {
        console.log('断1')
        return true
      }
    }
    console.log('断2')
    return false
  }

}
