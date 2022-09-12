import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { GeneralhomeComponent } from './generalhome/generalhome.component';
import { GeneralprofileComponent } from './generalprofile/generalprofile.component';
import { HomeComponent } from './home/home.component';
import { OneComponent } from './one/one.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {path:'one',component:OneComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'general',component:GeneralComponent},
  {path:'sample',component:SampleComponent},
  {path:'generalhome',component:GeneralhomeComponent},
  {path:'generalprofile',component:GeneralprofileComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
