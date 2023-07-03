import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AdminComponent } from './components/admin/admin.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { ReceptionistComponent } from './components/receptionist/receptionist.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { FormsModule } from '@angular/forms';
import { RoomReservationsComponent } from './components/room-reservations/room-reservations.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AdminComponent,
    DoctorComponent,
    ReceptionistComponent,
    ReservationsComponent,
    RoomReservationsComponent,
    DepartmentsComponent,
    RoomsComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
