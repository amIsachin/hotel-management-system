import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel.component';
import { AllHotelsComponent } from './components/all-hotels/all-hotels.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    HotelComponent,
    AllHotelsComponent
  ],
  imports: [
    CommonModule,
    HotelRoutingModule,
    RouterModule,
    MatTableModule
  ]
})
export class HotelModule { }
