import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Edustar/dashboard/dashboard.component';
import { GeneralComponent } from './Edustar/general/general.component';
import { HomeComponent } from './Edustar/home/home.component';
import { OneComponent } from './Edustar/one/one.component';
import { ProfileComponent } from './Edustar/profile/profile.component';
import { RegisterComponent } from './Edustar/register/register.component';

const routes: Routes = [
  {path:'',component:OneComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,
    children:[
      {path:'profile',component:ProfileComponent},
      {path:'general',component:GeneralComponent},
      {path:'dashboard',component:DashboardComponent},]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
