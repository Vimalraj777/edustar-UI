import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder } from '@angular/forms';
import { SubserviceService } from '../subservice.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  form!:FormGroup|any;
  Data:any;

  constructor(private fb:FormBuilder , private subservice:SubserviceService) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      username:[''],
      password:['']

    })
  }
  submit(){
    this.subservice.sample(this.form.value).subscribe((data:any)=>{
      this.Data=data;
      console.log("works");
      console.log("val",this.Data.password);
    })
  }

}
