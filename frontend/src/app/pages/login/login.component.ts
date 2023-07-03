import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      email: ['', Validators.required],
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
          localStorage.setItem('token', result.token);
          localStorage.setItem('role', result.user.role);
          if(localStorage.getItem('role') == '2') {
            this.router.navigate(['admin/admin'])
          } 
          else if (localStorage.getItem('role') == '3') {
            this.router.navigate(['admin/admin'])
          }
          
          
        }, error => {
          console.log('failed', error)
        }
      )
    }

  }

}
