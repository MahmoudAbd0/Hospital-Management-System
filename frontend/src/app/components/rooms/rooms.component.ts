import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
    roomsEvents: any = [
      { title: 'Avaliable', date: '2023-06-28', color: '0000FF' },
      { title: 'Not Avaliable', date: '2023-06-29', color: '#FF0000' }
    ]
    calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: this.roomsEvents,
    eventClick: this.handleDateClick.bind(this)
  };

  
  handleDateClick(args:any){
    if (args.event._def.title == "Avaliable"){
      console.log('Avaliable')
    } 
    else {
      console.log('not')
    }
    console.log(args.event._def.title)

  }

  ngOnInit(): void{

    this.roomsEvents.forEach((e: { [x:string]: string; }) => {
      if (e['title'] == 'Avaliable') {
        console.log('Hello')
      }
    })
  }
  

}
