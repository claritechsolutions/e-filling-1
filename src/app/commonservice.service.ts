import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
   regcheck:any=false;
   ischeck:boolean=false;
   private check=new BehaviorSubject(this.ischeck);
   checo =this.check.asObservable();
   private regch=new BehaviorSubject(this.regcheck);
   regcho=this.regch.asObservable();
   private data=new BehaviorSubject("");
   datao=this.data.asObservable();

  constructor() { }
  setcheck(verify:any)
  {
    this.check.next(verify);
  }
  setregcheck(ver:any)
  {
    this.regch.next(ver);
  }
  setobj(obj:any)
  {
    this.data.next(obj);
    console.log(obj);
  }
}
