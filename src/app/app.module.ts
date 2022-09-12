import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GeneralComponent } from './general/general.component';
import { SampleComponent } from './sample/sample.component';
import { GeneralhomeComponent } from './generalhome/generalhome.component';
import { GeneralprofileComponent } from './generalprofile/generalprofile.component';
import {NgxPaginationModule} from 'ngx-pagination';
// import { HomegeneralComponent } from './homegeneral/homegeneral.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    GeneralComponent,
    SampleComponent,
    GeneralhomeComponent,
    GeneralprofileComponent,
    // HomegeneralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
