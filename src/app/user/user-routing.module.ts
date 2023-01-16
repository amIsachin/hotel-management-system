import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './components/all-user/all-user.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
      children:[
        { path:'all-user', component: AllUserComponent }
      ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
