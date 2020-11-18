import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const PAT_NAME = '^[a-zA-Z ]{2,20}$';
    this.loginForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(PAT_NAME)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  isValidInput(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

}
