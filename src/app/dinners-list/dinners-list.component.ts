import { Component } from '@angular/core';
import { Dinner } from '../dinner';
import { HostDinnersService } from '../host-dinners.service';

@Component({
  selector: 'app-dinners-list',
  templateUrl: './dinners-list.component.html',
  styleUrls: ['./dinners-list.component.scss']
})
export class DinnersListComponent {
  dinners: Dinner[] = [];
  selectedDinner? : Dinner;

  constructor(private dinnerService: HostDinnersService) { }

  ngOnInit() {
    this.getDinners()
  }
  getDinners() {
    this.dinnerService.getDinners().subscribe(res => {
      this.dinners = res;
      console.log(this.dinners)
    })
  }

  onSelect(dinner: Dinner): void {
    this.selectedDinner = dinner;
  }
}
