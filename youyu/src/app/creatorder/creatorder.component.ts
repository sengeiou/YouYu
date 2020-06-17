import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { AppBase } from '../AppBase';
import { InstApi } from 'src/providers/inst.api';
import { MemberApi } from 'src/providers/member.api';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-creatorder',
  templateUrl: './creatorder.component.html',
  styleUrls: ['./creatorder.component.scss'],
  providers: [InstApi, MemberApi]
})
export class CreatorderComponent extends AppBase {

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public instApi: InstApi,
    public memberApi: MemberApi,
  ) {
    super(router, activeRoute, instApi, memberApi);

  }

  onMyLoad() {
    this.params;
  }
  onMyShow() {
    
    // if (MainComponent.Instance != null) {
    //   MainComponent.Instance.setModule("sim", "addagent");
    // }
  }
}