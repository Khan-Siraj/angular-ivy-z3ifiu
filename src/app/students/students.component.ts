import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DataProcessorService } from "../services/data-processor.service";
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @ViewChild('courseField') courseField:ElementRef;
  public isCourseSelected:boolean=false;
  public optionValue:string="";
  private dialog:any;
  private infoDialog:any;
  public students:any[]=[];
  public stuName:string="";
  public stuCourse:string="";
  constructor(private alert:MatDialog,private dataProcessor:DataProcessorService) { }

  ngOnInit(): void {
  	this.dataProcessor.isCourseSelectedValue.subscribe((response:boolean)=>{
       this.isCourseSelected=response;
  	});

  	this.dataProcessor.optionValue.subscribe((response:string)=>{
       this.optionValue=response;
       this.courseField.nativeElement.value=this.optionValue;
       console.log(this.optionValue);
  	})
  }

  addStudent(el:any):void{
  	var data={
  		name:el.value,
  		course:this.optionValue
  	};
  	this.students.push(data);
  	this.dialog.close();
  	this.isCourseSelected=false;
    this.courseField.nativeElement.value="";
  }
  
  toggleStudentDialog(el:any,action:string):void{
    if(action=='open'){
  		this.dialog=this.alert.open(el);
  	}

  	if(action=='close'){
  		this.dialog.close();
  		this.isCourseSelected=false;
  		this.courseField.nativeElement.value="";
  	}
  }

  getInfo(name:string,course:string,el:any):void{
    this.stuName=name;
    this.stuCourse=course;
    this.infoDialog=this.alert.open(el);
  }
}
