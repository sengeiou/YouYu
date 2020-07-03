import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { AppBase } from '../AppBase';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { MainComponent } from '../main/main.component';
import { SimapiApi } from 'src/providers/simapi.api';
import { AgentApi } from 'src/providers/agent.api';

import * as echarts from 'echarts';

declare let Chart: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [InstApi, MemberApi,AgentApi]
})
export class DashboardComponent extends AppBase {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public instApi: InstApi,
    public memberApi: MemberApi,
    public agentApi: AgentApi,
  ) {
    super(router, activeRoute, instApi, memberApi);
  }


  latestorder = [];
  cardtoatl=0;
  month=0;
  days=0;
  clientaccoptions = null;
  list=[];
  datefrom='';
  dateto='';
  allprice=0;
 
  

  onMyShow() { 
    if (MainComponent.Instance != null) {
      MainComponent.Instance.setModule("home", "");
    }
 
    this.agentApi.simcardlist({}).then((res:any)=>{
         this.cardtoatl=res.length;
    })
 
    this.agentApi.statistics({ 
      
    }).then((res:any)=>{
      this.month=res.month;
      this.days=res.days;
      this.list=res.list; 
      this.datefrom=res.list[0].date;
      this.allprice=res.allprice;
      this.dateto=res.list[res.list.length-1].date; 
      console.log(res.list[res.list.length-1].date,'返回的数据'); 

      this.setClientAccOption(this.list);
      
    })
 
  }



  setClientAccOption(list) {
     
    var data = []; 
    var datelist=[];  
    for(var i=0;i<list.length;i++){ 
      datelist.push(list[i].date);
      data.push(list[i].price);
    }

    console.log(datelist,data,'立刻就快乐健康');
 
    this.clientaccoptions = {
      title: {
        text:"累积充值"
      },
      tooltip: {
          trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: datelist
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: data,
        type: 'line',
        areaStyle: {}
      }]
    };

  }

  

}
