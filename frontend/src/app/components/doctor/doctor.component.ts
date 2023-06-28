import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent {

  currentPage = 1; // start with the first page
  itemsPerPage = 5; // show 5 items per page

  doctors:any[]=
  [
    {id:1, name:"Aya", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"aya@gmail.com",password:"12345",Role:"Doctor",phone:"0102132323",department:"SNWS;WSW"},
    {id:2, name:"Omnai", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"omnia@gmail.com",password:"12345",Role:"Doctor",phone:"0102132323",department:"SNWS;WSW"},
    {id:3, name:"Aya", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"aya@gmail.com" ,password:"12345",Role:"Doctor",phone:"0102132323",department:"SNWS;WSW"},
    {id:4, name:"Omnai", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"omnia@gmail.com",password:"12345",Role:"Doctor",phone:"0102132323",department:"SNWS;WSW"},
    {id:5, name:"Aya", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"aya@gmail.com",password:"12345",Role:"Doctor",phone:"0102132323",department:"SNWS;WSW"},
    {id:6, name:"Aya", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"aya@gmail.com",password:"12345",Role:"Doctor",phone:"0102132323",department:"SNWS;WSW"},
    {id:1, name:"Aya", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"aya@gmail.com",password:"12345",Role:"Doctor",phone:"0102132323",department:"SNWS;WSW"},
    {id:2, name:"Omnai", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"omnia@gmail.com",password:"12345",Role:"Doctor",phone:"0102132323",department:"SNWS;WSW"},

  ]


  addDoctor:FormGroup = new FormGroup(
    {
      name: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required]),
      Role :  new FormControl('',[Validators.required]),
      department :  new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      phone :  new FormControl('',[Validators.required]),
      image : new FormControl('',[Validators.required])
    }
  )

  updateDoctor:FormGroup = new FormGroup(
    {
      name: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required]),
      Role :  new FormControl('',[Validators.required]),
      department :  new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      phone :  new FormControl('',[Validators.required]),
      image : new FormControl('',[Validators.required])
    }
  )
  updatedCurrentElementId: any;
  udeleteCurrentElementId: any;


  showAddBox()
  {
    let layer:any = document.getElementById("layer");
    layer.style.display = "block";
  }


  closeAddBox()
  {
    let layer:any = document.getElementById("layer");
    layer.style.display = "none";
  }

  addNewDoctor()
  {
    console.log(this.addDoctor.value)
  }


  showUpdateBox(id:any)
  {
    let updatelayer:any = document.getElementById("updatelayer");
    updatelayer.style.display = "block";
    this.updatedCurrentElementId = id;
  }

  closeUpdateBox()
  {
    let updatelayer:any = document.getElementById("updatelayer");
    updatelayer.style.display = "none";
  }

  updateOneAdmin()
  {
    console.log(this.updateDoctor.value)
  }

  showDeleteBox(id:any)
  {

    let deletedLayer:any = document.getElementById("deletedLayer");
    deletedLayer.style.display = "block";
    this.udeleteCurrentElementId = id;
  }

  closeDeleteBox()
  {
    let deletedLayer:any = document.getElementById("deletedLayer");
    deletedLayer.style.display = "none";
  }

  delete()
  {
    console.log(this.udeleteCurrentElementId)
  }
}
