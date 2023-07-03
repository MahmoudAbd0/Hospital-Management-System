import { Component } from '@angular/core';


@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {

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
