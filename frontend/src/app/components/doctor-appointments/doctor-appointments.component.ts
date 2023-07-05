import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.scss']
})
export class DoctorAppointmentsComponent {
  appointments:any[]=[];
  drLogged=false;
  constructor(private _AppointmentService:AppointmentService){

  //  _AppointmentService.getAppointments().subscribe((res)=>{
  //    this.appointments=res.Appointmens
  //   //  console.log(this.appointments);
// })
  }
  ngOnInit(){
    const id = Number(localStorage.getItem('id'));
     console.log(id);
     if (localStorage.getItem('role') == '1') {
      this.drLogged = localStorage.getItem('role') == '1';
      this._AppointmentService.getAppointmentsByDoctor(id).subscribe((res)=>{
        this.appointments=res.appointments
        console.log( this.appointments);
      })
     }else{
      this._AppointmentService.getAppointments().subscribe((res)=>{
        this.appointments=res.Appointmens
       //  console.log(this.appointments);
   })
     }

}
}
