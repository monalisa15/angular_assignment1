import { Component, OnInit } from '@angular/core';
import { employee } from '../data/employee.model';
import { DataService } from '../data/data.service';
import { NgForm, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  Originalemployee : employee = {
  fname : null,
  lname : null,
  Email : null,
  no : null,
  address : null,
  uname : null,
  pwd : null,
  gender : null,
  qualification : null,
  experience : null,
  languages: []
 };
 employee : employee ={...this.Originalemployee};
 qualification: Observable<string[]>;
 experience: Observable<string[]>;
 languages:string[];
  constructor(private dataservice: DataService) { }
     ngOnInit(){
      this.qualification=this.dataservice.getQualification();
      this.experience=this.dataservice.getExperience();
      this.languages=['C', 'Java', 'Csharp', 'PHP', 'Python'];
     }
     onSubmit(form : NgForm){
      if(form.value.C==true){
        this.employee.languages.push("C");
      }
      if(form.value.Java==true){
        this.employee.languages.push("Java");
      }
      if(form.value.Csharp==true){
        this.employee.languages.push("C#");
      }
      if(form.value.PHP==true){
        this.employee.languages.push("PHP");
      }
      if(form.value.Python==true){
        this.employee.languages.push("Python");
      }
      if(form.valid){
      console.log(this.employee);
      }
    }
  }


