import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {AuthService} from "../auth.service";
import {tap} from "rxjs/operators";
import {noop} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
      private fb: FormBuilder,
      private auth: AuthService,
      private router:Router) {

      this.form = fb.group({
          email: ['student@angular-university.io', [Validators.required]],
          password: ['password', [Validators.required]]
      });

  }

  ngOnInit() {

  }

  login() {
    const { email, password } = this.form.value;
    this.auth.login(email, password).subscribe({next: this.onSuccessLogin.bind(this), error:this.onErrorLogin})
  }

  private onSuccessLogin(): void {
    this.router.navigateByUrl('/courses');
  }

  private onErrorLogin(): void {
    alert('login failed');
  }

}
