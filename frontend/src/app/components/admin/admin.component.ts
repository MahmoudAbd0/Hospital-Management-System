import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { ReceptionistService } from 'src/app/services/receptionist.service';
import { doctorModel } from 'src/app/models/doctors/doctorModel.model';
import { receptionistModel } from 'src/app/models/doctors/receptionistModel';
import { patientModel } from 'src/app/models/doctors/patientModel.model';
import { PatientService  } from 'src/app/services/patient.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent{
  doctors!: doctorModel[];
  receptionists!: receptionistModel[];
  patients!: patientModel[];
  selectedDoctor: doctorModel | null = null;
  selectedReceptionist: receptionistModel | null = null;
  selectedPatient: patientModel | null = null;
  editMode = false;

  constructor(private doctorService: DoctorService, private receptionistService: ReceptionistService, private patientService:PatientService) {}

  ngOnInit(): void {
    this.doctorService.getdoctors().subscribe(response  => {
      this.doctors = response.data;
    });

    this.receptionistService.getReceptionists().subscribe(response  => {
      this.receptionists = response.data;
    });


    this.patientService.getPatients().subscribe(response  => {
      this.patients = response.data;
    });
  }

  

  editDoctor(doctor: doctorModel): void {
    this.selectedDoctor = { ...doctor };
    this.editMode = true;
  }

  editReceptionist(receptionist: receptionistModel): void {
    console.log('clicked')
    this.selectedReceptionist = { ...receptionist };
    this.editMode = true;
  }

  editPatient(patient: patientModel): void {
    console.log('clicked')
    this.selectedPatient = { ...patient };
    this.editMode = true;
  }

  cancelEdit(): void {
    this.selectedDoctor = null;
    this.selectedReceptionist = null;
    this.selectedPatient = null;
    this.editMode = false;
  }

  saveDoctor(): void {
    if (this.selectedDoctor) {
      this.doctorService.updateDoctor(this.selectedDoctor).subscribe(updatedDoctor => {
        const index = this.doctors.findIndex(d => d.id === updatedDoctor.id);
        if (index !== -1) {
          this.doctors[index] = updatedDoctor;
        }
        this.cancelEdit();
      });
    }
  }

  saveReceptionist(): void {
    if (this.selectedReceptionist) {
      this.receptionistService.updateReceptionist(this.selectedReceptionist).subscribe(updatedReceptionist => {
        const index = this.receptionists.findIndex(d => d.id === updatedReceptionist.id);
        if (index !== -1) {
          this.receptionists[index] = updatedReceptionist;
        }
        this.cancelEdit();
      });
    }
  }

  savePatient(): void {
    if (this.selectedPatient) {
      this.patientService.updatePatient(this.selectedPatient).subscribe(updatedPatient => {
        const index = this.patients.findIndex(d => d.id === updatedPatient.id);
        if (index !== -1) {
          this.patients[index] = updatedPatient;
        }
        this.cancelEdit();
      });
    }
  }

  deleteDoctor(doctor: doctorModel): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.doctorService.deleteDoctor(doctor.id).subscribe(() => {
        this.doctors = this.doctors.filter(d => d.id !== doctor.id);
      });
    }
  }

  deleteReceptionist(receptionist: receptionistModel): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.receptionistService.deleteReceptionist(receptionist.id).subscribe(() => {
        this.receptionists = this.receptionists.filter(d => d.id !== receptionist.id);
      });
    }
  }

  deletePatient(patient: patientModel): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.patientService.deletePatient(patient.id).subscribe(() => {
        this.patients = this.patients.filter(d => d.id !== patient.id);
      });
    }
  }

}

