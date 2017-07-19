import {Component} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {ProfileComponent} from "./components/profile/profile.component";
import {MdDialog} from "@angular/material";
import {PostsComponent} from "./components/posts/posts.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myImage: string;
  userId:string;

  constructor(public auth: AuthService,public dialog:MdDialog) {
    this.auth.loggedIn.subscribe(profile => {
        console.log(JSON.stringify(profile));

        this.myImage = profile.picture;
        console.log("myimage" + this.myImage);
        this.userId=profile.sub;
        console.log("User ID"+this.userId);

      }
    );


  }
  openMyProfile(){
   this.dialog.open(ProfileComponent);
  }
  openMyPost(){
    this.dialog.open(PostsComponent);
  }

  title = 'app';


}
