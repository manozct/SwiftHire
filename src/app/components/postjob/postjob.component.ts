import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  addPostForm:FormGroup
   categories:string[]=['Developer','Tester','Education','Pharmacy'];

  constructor(private formBuilder:FormBuilder) {
    formBuilder.group(
      {


      }
    )
  }

  ngOnInit() {

    console.log('post a job container');
  }
  close(){
    this.close();
  }

}
