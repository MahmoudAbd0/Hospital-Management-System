import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { ReceptionistComponent } from './components/receptionist/receptionist.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { RoomReservationsComponent } from './room-reservations/room-reservations.component';
import { DepartmentsComponent } from './departments/departments.component';

const routes: Routes = [
  {path:"admin", component:AdminComponent},
  {path:"doctor", component:DoctorComponent},
  {path:"receptionist", component:ReceptionistComponent},
  {path:"reservations", component:ReservationsComponent},
  {path: "room-reservations", component:RoomReservationsComponent},
  {path: "departments", component:DepartmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
