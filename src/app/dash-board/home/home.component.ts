import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/commonservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  verify:any;
  regcheck:any;
  userobj:any=
  {
      email:"",
       password:"",
    
  }
  userobjs:any=
  {
    fn:"",
    ln:"",
    em:""
  }

  constructor( private service:CommonserviceService,private router:Router) {
    this.regcheck=false;
    this.service.setregcheck(this.regcheck);
    this.service.checo.subscribe((res)=>
    {
      console.log(res);
      this.verify=res;
    })
   }
  state:any=['Washington',"New Jersey","New Mexico",'New York'];

  ngOnInit(): void {
  }
  login()
  {
    this.verify=false;
    this.service.setcheck(this.verify);
  }
  signup()
  {
    
    this.verify=true;
    this.service.setcheck(this.verify);
  }
  register()
  {
    console.log(this.userobjs);
    this.router.navigate(['signup']);
    this.service.setobj(this.userobjs);
  }

}
