import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AdminComponent } from './components/admin/admin.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { ReceptionistComponent } from './components/receptionist/receptionist.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { FormsModule } from '@angular/forms';
import { RoomReservationsComponent } from './room-reservations/room-reservations.component';
import { DepartmentsComponent } from './departments/departments.component'



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AdminComponent,
    DoctorComponent,
    ReceptionistComponent,
    ReservationsComponent,
    RoomReservationsComponent,
    DepartmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
