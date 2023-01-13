import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AllUsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserModule { }
