import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(public auth: AuthService) {



  }

  ngOnInit() {

    this.auth.handleAuthentication();
    // console.log(this.auth.getUser());


  }


}