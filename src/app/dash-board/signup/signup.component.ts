import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from 'src/app/commonservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  pass1:string="password";
  passcheck1:boolean=false;
  pass2:string="password";
  passcheck2:boolean=false;
  Contact=['Select','Attorney',"Attorney's Assistant",'Paralegal','Self Represented','Other','Support','Assistant'];
  State=['Select','Washington','New York',"New Jersey"]
  dataobj:any;
  initial:any;
  userobj:any;
  regcheck:any;
   SecQ:any=["Select","What is your Favorite Color?","What is your Favorite flavor?","What was your first job?","What is your Favorite sport to play or watch?"]
  constructor(private service:CommonserviceService,private route:Router) {
   
    this.regcheck=true;
    this.service.setregcheck(this.regcheck);
    this.service.datao.subscribe((res)=>{
      console.log(res);
      this.dataobj=res;
      console.log(this.dataobj.ln);
      this.userobj=
    {
       fname:this.dataobj.fn,
       lname:this.dataobj.ln,
       email:this.dataobj.em
    }
    
    })
   }
  
  

  ngOnInit(): void {
  }
  continue(frm:any)
  {
    alert("Registered Successfully");
    console.log(frm.value);
    this.service.setobj(frm.value);
    this.route.navigate(['payment']);
  }
  passtoggler1()
  {
    if(this.passcheck1)
    {
      this.pass1="password";
      this.passcheck1=false;
    }
    else{
      this.pass1="text";
      this.passcheck1=true;
    }
  }
  passtoggler2()
  {
    if(this.passcheck2)
    {
      this.pass2="password";
      this.passcheck2=false;
    }
    else{
      this.pass2="text";
      this.passcheck2=true;
    }
  }

}
