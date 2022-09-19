import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubserviceService } from '../subservice.service';
// import { SubserviceService } from '../subservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:any;
  step:any;
  // id:any;
  // data1:any;
  constructor( private route:Router , private subservice:SubserviceService) { }

  ngOnInit(): void {

    // if(localStorage.getItem('token')==null){
    //   alert("session ended");
    //   this.route.navigate(['/one'])
    // }
    this.subservice.get().subscribe(data=>{
      this.data=data;
      console.log(data);

      // this.step=0;
      if(this.data.id==19297){
        this.step=1;
      }
      
    },error=>{
      this.route.navigate(['/one'])
    })
    

    
    
    


  }
  submit(){
    // this.id=[this.data,this.data.id];
   
    this.route.navigate(['/profile'])
  }

  Submit(){
    // this.id=[this.data,this.data.id];
   
    this.route.navigate(['/general'])
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/one']);

  }

}
