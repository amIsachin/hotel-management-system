import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserEntity } from 'src/app/Entities/User.Entity';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  public userEntity:UserEntity[] = [];
  public displayedColumns: string[] = ['Name', 'Gender', 'Age', 'City', 'FromDate'];
  public dataSource:MatTableDataSource<UserEntity> = new MatTableDataSource<UserEntity>();
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  private getAllUsers() {
    this._userService.getAllUsers().subscribe(response=>{
      this.userEntity = response;
      this.dataSource = new MatTableDataSource<UserEntity>(this.userEntity);
    });
  }

}
