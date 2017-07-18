import { Routes, RouterModule } from '@angular/router'

//Components
import { AppComponent } from './app.component';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {PostjobComponent} from "./components/postjob/postjob.component";


const MY_ROUTES: Routes = [
  {path:"homepage",component:HomepageComponent},
  {path:"homepage/post",component:PostjobComponent}


]

export const MyRoutesModule = RouterModule.forRoot(MY_ROUTES);
