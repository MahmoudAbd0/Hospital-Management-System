import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {


  currentPage = 1; // start with the first page
  itemsPerPage = 5; // show 5 items per page

  updatedCurrentElementId: any;
  udeleteCurrentElementId: any;



  addAdmin:FormGroup = new FormGroup(
    {
      name: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required]),
      Role :  new FormControl('',[Validators.required]),
      image : new FormControl('',[Validators.required])
    }
  )

  updateAdmin:FormGroup = new FormGroup(
    {
      name: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required]),
      Role :  new FormControl('',[Validators.required]),
      image : new FormControl('',[Validators.required])
    }
  )


  users:any[]=
  [
    {id:1, name:"Aya", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"aya@gmail.com",Role:"Admin"},
    {id:2, name:"Omnai", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"omnia@gmail.com",Role:"Admin"},
    {id:3, name:"Aya", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"aya@gmail.com",Role:"Admin"},
    {id:4, name:"Omnai", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"omnia@gmail.com",Role:"Admin"},
    {id:5, name:"Aya", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"aya@gmail.com",Role:"Admin"},
    {id:6, name:"Aya", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"aya@gmail.com",Role:"Admin"},
    {id:1, name:"Aya", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"aya@gmail.com",Role:"Admin"},
    {id:2, name:"Omnai", image:"../../../assets/images/user_ahmed@gmail.com.jpeg",email:"omnia@gmail.com",Role:"Admin"},

  ]
  
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


  addNewAdmin()
  {
    console.log(this.addAdmin.value)
  }

  updateOneAdmin()
  {
    console.log(this.updateAdmin.value)
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
