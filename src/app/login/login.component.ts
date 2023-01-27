import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

 async login() {
    this.http.get<any>('http://localhost:3000/users').subscribe(res => {
      console.log(res)
      console.log( this.loginForm.value.username)
      console.log( this.loginForm.value.password)
      const user = res.find((a: any) => {
        return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password;
      });

      console.log(user);
      if(user){
        alert(`User ${user.username} login successful`);
        this.router.navigate(['/dashboard']);
      } else{
        alert(`User not found`);
      }
    }, err=>{
      alert('Something went wrong')
    })
  }
}
