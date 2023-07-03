import { Component } from '@angular/core';

@Component({
  selector: 'app-room-reservations',
  templateUrl: './room-reservations.component.html',
  styleUrls: ['./room-reservations.component.scss']
})
export class RoomReservationsComponent {
  selectedDate!: string;
  selectedHour!: string;

  
  // Handle the selected date
  handleDateChange(event: any) {
    this.selectedDate = event.target.value;
    // Additional logic here
  }


  // Handle the selected hour
  handleHourChange(event: any) {
    this.selectedHour = event.target.value;
  }

}
