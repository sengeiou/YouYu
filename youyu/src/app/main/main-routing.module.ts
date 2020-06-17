import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { ListComponent } from '../list/list.component';
import { DetailComponent } from '../detail/detail.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { UploadComponent } from '../upload/upload.component';
import { SupportComponent } from '../support/support.component'; 
import { SearchComponent } from '../search/search.component'; 
import { OrderlistComponent } from '../orderlist/orderlist.component';
import { SimcardComponent } from '../simcard/simcard.component';
import { AgentlistComponent } from '../agentlist/agentlist.component';
import { AddagentComponent } from '../addagent/addagent.component';
import { CreatorderComponent } from '../creatorder/creatorder.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "list", component: ListComponent },
      { path: "detail", component: DetailComponent },
      { path: "upload", component: UploadComponent },
      { path: "404", component: NotfoundComponent }, 
      { path: "support", component: SupportComponent },
      { path: "search", component: SearchComponent }, 
      { path: "orderlist", component: OrderlistComponent }, 
      { path: "simcard", component: SimcardComponent }, 
      { path: "agentlist", component: AgentlistComponent }, 
      { path: "addagent", component: AddagentComponent }, 
      { path: "creatorder", component: CreatorderComponent }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
