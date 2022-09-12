import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-generalhome',
  templateUrl: './generalhome.component.html',
  styleUrls: ['./generalhome.component.scss']
})
export class GeneralhomeComponent implements OnInit {
  data:any;
  constructor(private route:Router ,private active:ActivatedRoute) { }
 

  ngOnInit(): void {
    this.data=this.active.snapshot.params['id']
  }

  submit(){
    this.route.navigate(['/generalprofile',{"id":this.data}])
  }
}
