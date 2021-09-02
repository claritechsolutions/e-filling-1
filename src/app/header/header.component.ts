import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  regcheck:any;

  constructor(private service:CommonserviceService) { 
    
    this.service.regcho.subscribe((res)=>{
      this.regcheck=res;

    })
  }

  ngOnInit(): void {
  }

}
