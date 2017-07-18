import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {PostjobComponent} from "../postjob/postjob.component";
import {MdDialog} from "@angular/material";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {



  constructor(public auth: AuthService,public dialog:MdDialog) {




  }
  openDialog(){
   this.dialog.open(PostjobComponent);
  }

  ngOnInit() {

    this.auth.handleAuthentication();
    // console.log(this.auth.getUser());

  }


}
