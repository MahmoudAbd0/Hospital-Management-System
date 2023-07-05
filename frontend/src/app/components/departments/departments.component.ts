import { Component } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent {
  departments:any[]=[];

constructor(private _depatmentService:DepartmentService){
  _depatmentService.getDepartments().subscribe((res)=>{
   this.departments=res
   console.log(this.departments);

})
}
}

