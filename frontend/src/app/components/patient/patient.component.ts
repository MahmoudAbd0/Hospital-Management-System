import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { PatientService } from 'src/app/services/patient.service';
import { NewPatientInterface } from 'src/app/interfaces/new-patient-interface';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  patients: any[] = [];
  id: any;
  drLogged = false;
  addMode = false;
  

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
    toggleAddMode(): void {
      this.addMode = !this.addMode;
    }
  
    addPatient(patientData: NewPatientInterface): void {
      const newPatient: NewPatientInterface = {
        name: patientData.name,
        email: patientData.email,
        password: patientData.password,
        gender: patientData.gender,
        date_of_birth: new Date(patientData.date_of_birth).toISOString(),
        phone_number: patientData.phone_number
      };
      this._patientService.createPatient(newPatient).subscribe(newPatient => {
        this.patients.push(newPatient);
        this.toggleAddMode();
      });

      console.log(patientData)
  }
}
