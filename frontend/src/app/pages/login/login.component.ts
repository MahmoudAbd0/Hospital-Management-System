import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder,
              private loginService:LoginService,
              private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required,],
      password: ['', Validators.required]
    })
  }

  submit() {
    if (this.form.valid) {
      const formData = this.form.getRawValue();
      const email = formData.email;
      const password = formData.password;

      // const data = {
      //   email: formData.email,
      //   password: formData.password
      // }

      this.loginService.login(email, password).subscribe(
        (result: any) => {
          console.log(result)
          localStorage.setItem('token', result.token);
          localStorage.setItem('role', result.user.role);
          localStorage.setItem('id', result.user.id);
          localStorage.setItem('name', result.user.name);
          console.log(localStorage.getItem('id'));
          if(localStorage.getItem('role') == '3') {
            console.log('admin')
           

            this.router.navigate(['dashboard/admin'])
          }
          else if (localStorage.getItem('role') == '2') {
            this.router.navigate(['dashboard/receptionist'])
          }
          else if (localStorage.getItem('role') == '1') {
            this.router.navigate(['dashboard/doctor/appointments'])
          }


        }, error => {
          console.log('failed', error)
        }
      )
    }

  }



}
