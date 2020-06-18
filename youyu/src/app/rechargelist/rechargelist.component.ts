 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { AppBase } from '../AppBase';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-rechargelist',
  templateUrl: './rechargelist.component.html',
  styleUrls: ['./rechargelist.component.scss'],
  providers: [InstApi, MemberApi]
})
export class RechargelistComponent extends AppBase {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public instApi: InstApi,
    public memberApi: MemberApi,
  ) {
    super(router, activeRoute, instApi, memberApi);

  }
  type="";
  check=false;
  onMyLoad() {
    this.params;
  }
  onMyShow() { 
    if (MainComponent.Instance != null) {
      MainComponent.Instance.setModule("sim", "rechargelist");
    }
  }

  ordertype(type){
    this.type=type;
  }

  choose(){
  if(this.check==false){
   this.check=true;
  }else{
    this.check=false;
  }
  }

}
