import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/commonservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  verify:any;
  data:any;
  state:any=["Washington","New York","New Jersey"]
  userobj:any;
  cardtype:any=["--Select--","Visa","Master Card","American Express"]
  month:any=["--Month--","January","February","March","April","May","June","July","August","September","October","November","December"]
  year:any=["--Year--","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031"]
  constructor( private service:CommonserviceService) {
    this.verify=true;
    this.service.setregcheck(this.verify);
    this.service.datao.subscribe((res)=>
    {
          console.log(res);
          this.data=res;
          console.log(this.data.pass);
    })
    this.userobj=
    {
     fn:this.data.fn,
     ln:this.data.ln,
     ba:this.data.sa,
     city:this.data.city,
     zip:this.data.zc,
     em:this.data.email,
     ph:this.data.ph,
    


    }

   }

  ngOnInit(): void {
  }

}
