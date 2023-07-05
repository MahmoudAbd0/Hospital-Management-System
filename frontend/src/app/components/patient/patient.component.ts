import { Component } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent {
  patients:any[]=[];
constructor(private _patientService: PatientService){
_patientService.getPatients().subscribe((res)=>{
this.patients=res.data;
console.log(this.patients);

})
}
}
