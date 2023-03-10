import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public signupForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: [''],
    });
  }

  signUp() {
    this.http.post<any>('http://localhost:3000/users', this.signupForm.value).subscribe(res => {
      alert('Registration Successful');
      this.signupForm.reset();
      this.router.navigate(['/login']);
    }, err => {
      console.log(err);
      alert('Registration Failure');
    })
  }

}
