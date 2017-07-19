import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { PostjobComponent } from './components/postjob/postjob.component';
import { PostsComponent } from './components/posts/posts.component';
import { JoblistComponent } from './components/joblist/joblist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {DataService} from './services/data.service';
import {AuthService} from './services/auth.service';
import {MyRoutesModule} from './app.routes';
import {MaterialModule, MdNativeDateModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ValiduserGuard} from "./guards/validuser.guard";
import { JobpostComponent } from './components/jobpost/jobpost.component';



@NgModule({
  declarations: [
    AppComponent,
    PostjobComponent,
    PostsComponent,
    JoblistComponent,
    ProfileComponent,
    HomepageComponent,
    JobpostComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MyRoutesModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdNativeDateModule,


  ],
  providers: [DataService, AuthService,ValiduserGuard],
  entryComponents:[PostjobComponent,ProfileComponent,PostsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
