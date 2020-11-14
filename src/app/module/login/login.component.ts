import {AfterViewChecked, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewChecked {

  public loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  public disabled: boolean;
  private request: boolean;

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {
    this.disabled = true;
    this.request = false;
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.disabled = !(this.loginForm.valid && !this.request);
    this.cdRef.detectChanges();
  }

  getErrorMessageLogin(): string {
    return this.loginForm.controls.login.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorMessagePassword(): string {
    return this.loginForm.controls.password.hasError('required') ? 'You must enter a value' : '';
  }

  public loginApi(): void {
    if (this.loginForm.valid) {
      this.request = true;
      this.router.navigate([''])
        .then(ignored => '');
    }
  }

}
