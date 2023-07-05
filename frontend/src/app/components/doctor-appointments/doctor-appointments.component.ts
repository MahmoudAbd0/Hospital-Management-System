import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.scss']
})
export class DoctorAppointmentsComponent {
  appointments:any[]=[];

  constructor(private _AppointmentService:AppointmentService){

   _AppointmentService.getAppointments().subscribe((res)=>{
     this.appointments=res.Appointmens
    //  console.log(this.appointments);
})
  }
}
