import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DataProcessorService } from "../services/data-processor.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public courses:string[]=[];
  private dialog:any;

  
  constructor(private alert:MatDialog,private dataProcessor:DataProcessorService) { }

  ngOnInit(): void {
  }

  addCourse(el:any):void{
  	this.courses.push(el.value);
  	this.dialog.close();
  }

  toggleCourseDialog(el:any,action:string):void{
  	if(action=='open'){
  		this.dialog=this.alert.open(el);
  	}

  	if(action=='close'){
  		this.dialog.close();
  	}
   
  }

  selectOption(value:string):void{
    if(value != ""){
      this.dataProcessor.sendOption(value);
      this.dataProcessor.isCourseSelected(true);
    }
  }

}
