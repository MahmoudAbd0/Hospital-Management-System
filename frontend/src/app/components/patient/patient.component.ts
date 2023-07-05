import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  patients: any[] = [];
  id: any;
  drLogged = false;

  constructor(private _patientService: PatientService) {}

  ngOnInit() {
    this.drLogged = localStorage.getItem('role') == '1';
    const id = Number(localStorage.getItem('id'));
    // console.log(id);
    if (localStorage.getItem('role') == '1') {
      this._patientService.getPatientsByDoctor(id).subscribe((res)=>{
      this.patients = res.appointments;
        // console.log(this.patients);
      });
    } else {
      this._patientService.getPatients().subscribe((res) => {
      this.patients = res.data;
        // console.log(this.patients);
      });
    }
  }
}
