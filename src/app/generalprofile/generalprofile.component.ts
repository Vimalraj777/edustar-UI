import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup ,FormBuilder} from '@angular/forms';
import { SubserviceService } from '../subservice.service';

@Component({
  selector: 'app-generalprofile',
  templateUrl: './generalprofile.component.html',
  styleUrls: ['./generalprofile.component.scss']
})
export class GeneralprofileComponent implements OnInit {
data:any;
Data:any;
// loaddata:any;
generalForm!:FormGroup;
  constructor(private active:ActivatedRoute,private route:Router , private subs:SubserviceService , private fb:FormBuilder) { }

  ngOnInit(): void {
    this.Data=this.active.snapshot.params["id"]
    this.generalForm=this.fb.group({
      id:[''],
      instiName:[''],
      state:[''],
      urlname:[''],
      location:[''],
      paddress:[''],
      city:[''],
      nostaff:[''],
      noboys:[''],
      coname:[''],
      medium:[''],
      ofemail:[''],
      needs:[''],
      district:[''],
      pincode:[''],
      ofphno:[''],
      acadyear:[''],
      gender:[''],
      cunofstu:[''],
      comono:[''],
      nameofprince:[''],
      yearofest:[''],
      natureofaffili:[''],
      cunofgirls:[''],
      nonteaching:[''],
      coemailid:[''],
      sclevel:[''],
      headmono:[''],
      heademailid:[''],
      headofphno:[''],
      
    })
    




    this.subs.gpost(this.generalForm.value).subscribe((data: any)=>{
      console.log(data);
      this.data=data;
      if(data!=null){
        this.loaddata()
    }
    })
  }

  loaddata(){
      this.generalForm=this.fb.group({
        id:[this.data.id],
        instiName:[this.data.instiName],
        state:[this.data.state],
        urlname:[this.data.urlname],
        location:[this.data.location],
        paddress:[this.data.paddress],
        city:[this.data.city],
        nostaff:[this.data.nostaff],
        noboys:[this.data.noboys],
        coname:[this.data.coname],
        medium:[this.data.medium],
        ofemail:[this.data.ofemail],
        needs:[this.data.needs],
        district:[this.data.district],
        pincode:[this.data.pincode],
        ofphno:[this.data.ofphno],
        acadyear:[this.data.acadyear],
        gender:[this.data.gender],
        cunofstu:[this.data.cunofstu],
        comono:[this.data.comono],
        nameofprince:[this.data.nameofprince],
        yearofest:[this.data.yearofest],
        natureofaffili:[this.data.natureofaffili],
        cunofgirls:[this.data.cunofgirls],
        nonteaching:[this.data.nonteaching],
        coemailid:[this.data.coemailid],
        sclevel:[this.data.sclevel],
        headmono:[this.data.headmono],
        heademailid:[this.data.heademailid],
        headofphno:[this.data.headofphno],
        
      })
    }
 

  

  submit(){

    
  }



  // sub(){
  //   this.route.navigate(['/generalhome',{"val":this.data}])
  // }
}
