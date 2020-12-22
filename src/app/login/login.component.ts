import { CookieService } from 'ngx-cookie-service';
import { RestService } from './../rest.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private RestService: RestService,
    private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  enviarDatos(): any {
    this.RestService.post(`http://localhost:3000/login`,
      this.form.value)
      .subscribe((res: any) => {
        console.log('Login Exitoso!!');
        this.cookieService.set('token_access', res.accessToken, 4, '/');
        this.router.navigate(['/'])
      })
  }

}
