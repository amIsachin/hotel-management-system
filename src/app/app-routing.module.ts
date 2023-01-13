import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './user/components/all-users/all-users.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'user', component:UserComponent,children:[
    {path: 'all-users', component: AllUsersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
