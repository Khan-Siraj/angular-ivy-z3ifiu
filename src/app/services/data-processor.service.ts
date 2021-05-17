import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataProcessorService {

  constructor() { }

  public isCourseSelectedValue = new Subject();
  public optionValue = new Subject();

  isCourseSelected(res:any){
    this.isCourseSelectedValue.next(res);
  }

  sendOption(res:string){
  	this.optionValue.next(res);
  }
}
