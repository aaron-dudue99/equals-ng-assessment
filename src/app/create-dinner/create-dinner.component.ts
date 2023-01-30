import { Dinner } from './../dinner';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HostDinnersService } from '../host-dinners.service';

@Component({
  selector: 'app-create-dinner',
  templateUrl: './create-dinner.component.html',
  styleUrls: ['./create-dinner.component.scss']
})
export class CreateDinnerComponent {
  public createDinnerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, http: HttpClient, private router: Router, private dinnerService: HostDinnersService) { }

  ngOnInit(): void {
    this.createDinnerForm = this.formBuilder.group({
      name: ['', Validators.required],
      menu: ['', Validators.required],
      seats: ['', Validators.required],
    })
  }

  registerDinner(): void {
    const menuStr = this.createDinnerForm.value['menu'];

    //split menu string into a menu array
    const menu = menuStr.split(',');
    const dinner: Dinner = {
      title: this.createDinnerForm.value['name'],
      menu: menu,
      seats: this.createDinnerForm.value['seats'],
      reserved: false,
      status: 'upcoming',
      host: {
        name: 'Aaron',
        mobile: 'Dudue'
      },
    }

    console.log(dinner)
    console.log(this.createDinnerForm.value)
    this.dinnerService.createDinner(dinner)
    this.createDinnerForm.reset();
    this.router.navigate(['/dashboard']);
  }
}
