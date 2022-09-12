import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubserviceService } from '../subservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  loginForm!:FormGroup;
  data:any;
  id:any;
  form! : FormData;


  constructor(private fb:FormBuilder,private subService:SubserviceService,private router:Router ) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:[''],
      password:['']
    })
  }

  submit(){

    this.form = new FormData();
    this.form.append('username',this.loginForm.controls['username'].value);
    this.form.append('password',this.loginForm.controls['password'].value);

    console.log("DATA",this.form);
    this.subService.login(this.form).subscribe(data=>{
      console.log("access_token for login as response",data);
      this.data = data;

      if(this.data.detail==null){
        localStorage.setItem('token',this.data.token);   // Here i am storing the token in a Local Storage.
        this.router.navigate(['/home'])
      }
      else{
        alert("Invalid Credentials")
        
      }

    })
    
    
  }
}
