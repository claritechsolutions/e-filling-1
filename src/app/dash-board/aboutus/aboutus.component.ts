import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/commonservice.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  regcheck:any;

  constructor(private service:CommonserviceService) { 
    this.regcheck=false;
    this.service.setregcheck(this.regcheck);
  }

  ngOnInit(): void {
  }

}
