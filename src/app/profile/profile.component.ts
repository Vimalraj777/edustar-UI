import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute ,Router} from '@angular/router';
import { SubserviceService } from '../subservice.service';
// import { SubserviceService } from '../subservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;

  id: any;
  data :any;
  constructor( private fb: FormBuilder, private subservice : SubserviceService,private route:Router) { }

  ngOnInit(): void {
   
    // console.log(this.id);

    this.profileForm = this.fb.group({
      id: [''],
      username: [''],
      password: [''],
      name: [''],
      age: [''],
      gender: [''],
      fname: [''],
      mname: [''],
      phnumber: [''],
      address: ['']

    })

      this.subservice.profile().subscribe((arg : any)=>{
        this.data = arg;
        this.loadData();
      })


  }
  loadData() {
    this.profileForm = this.fb.group({
      id: [this.data.id],
      username: [this.data.username],
      password: [this.data.password],
      name: [this.data.name],
      age: [this.data.age],
      gender: [this.data.gender],
      fname: [this.data.fname],
      mname: [this.data.mname],
      phnumber: [this.data.phnumber],
      address: [this.data.address]
    })
  }
  submit(){
    

    this.subservice.Post(this.profileForm.value).subscribe((data: any)=>{
      console.log(data);
      this.data=data;
      if(data!=null){
        this.route.navigate(['/home'])
      
    }
    })
  }
  cancel(){
    this.route.navigate(['/home'])
  }
  deleted(){
    this.subservice.deleted().subscribe((data: any)=>{
      console.log(data);
      this.data=data;
      // if(data!=null){
        this.route.navigate(['/one'])
      
    // }
    })
  }
}
