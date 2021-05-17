import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CourseComponent } from './course/course.component';
import { StudentsComponent } from './students/students.component';
import { AllModule } from "./modules/all.module";

@NgModule({
  imports:      [ BrowserModule, FormsModule, AllModule],
  declarations: [ AppComponent, HelloComponent,CourseComponent, StudentsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
