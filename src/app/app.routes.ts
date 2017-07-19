import {RouterModule, Routes} from "@angular/router";
//Components
import {HomepageComponent} from "./components/homepage/homepage.component";
import {PostjobComponent} from "./components/postjob/postjob.component";
import {ValiduserGuard} from "./guards/validuser.guard";
import {JobpostComponent} from "./components/jobpost/jobpost.component";


const MY_ROUTES: Routes = [
  {path: "homepage", component: HomepageComponent},
  /*{path: "homepage/postjob", component: PostjobComponent},*/
  {path: "homepage/jobpost", component: JobpostComponent,canActivate:[ValiduserGuard]},


]

export const MyRoutesModule = RouterModule.forRoot(MY_ROUTES);
