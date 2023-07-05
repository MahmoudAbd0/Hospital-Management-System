import { Component } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {

  doctors: any[] = [];
  constructor(private _DoctorService:DoctorService){
    _DoctorService.getdoctors().subscribe((res)=>{
      this.doctors=res.data
      console.log(this.doctors);
    })


  }
}
