import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup  } from '@angular/forms';
// import { SubserviceService } from '../subservice.service';
import { SubserviceService } from '../subservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;

  data:any;

  constructor(private fb:FormBuilder , private subService:SubserviceService,private router:Router , private activate:ActivatedRoute) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      id:[''],
      username:[''],
      password:[''],
      name:[''],
      age:[''],
      gender:[''],
      fname:[''],
      mname:[''],
      phnumber:[''],
      address:['']

    })
  }
  submit(){
    console.log("data",this.registerForm.value);
    this.subService.post(this.registerForm.value).subscribe(data=>{
      this.data=data;
      console.log("okregister",this.data);
      if(this.data!=null){
        this.router.navigate(['/one'])
      }
  
    })
  }

    // this.subService.post(this.registerForm.value).subscribe((data: any)=>{
    //   console.log(data);
    //   if(data!=null){
    //     this.router.navigate(['/one'])

    //   }


      
    // })

    
  // }
}
