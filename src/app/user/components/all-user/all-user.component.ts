import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UserEntity } from 'src/app/Entities/User.Entity';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public dataSource:MatTableDataSource<UserEntity> = new MatTableDataSource<UserEntity>();
  constructor() { }

  ngOnInit(): void {
  }

}
