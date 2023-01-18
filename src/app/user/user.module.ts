import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    UserComponent,
    AllUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule
  ]
})
export class UserModule { }
