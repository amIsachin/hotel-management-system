import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HotelEntity } from 'src/app/Entities/Hotel.Entity';
import { HotelService } from 'src/app/service/hotel.service';

@Component({
  selector: 'app-all-hotels',
  templateUrl: './all-hotels.component.html',
  styleUrls: ['./all-hotels.component.css']
})
export class AllHotelsComponent implements OnInit {
  public hotelEntity:HotelEntity[] =[];
  public dataSource:MatTableDataSource<HotelEntity> = new MatTableDataSource<HotelEntity>();
  public displayedColumns: string[] = ['Name', 'RentPerDay', 'maximumCapacity'];
  constructor(private _hotelService:HotelService) { }

  ngOnInit(): void {
    this.getAllHotels();
  }

  private getAllHotels() {
    this._hotelService.getAllHotels().subscribe(response=>{
      this.hotelEntity = response;
      this.dataSource = new MatTableDataSource<HotelEntity>(this.hotelEntity);
    })
  }

}
