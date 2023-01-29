import { Dinner } from './../dinner';
import { HostDinnersService } from './../host-dinners.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-host-dashboard',
  templateUrl: './host-dashboard.component.html',
  styleUrls: ['./host-dashboard.component.scss']
})
export class HostDashboardComponent {
  dinners: Dinner[] = [];
  activeDinners: Dinner[] = [];
  upcomingDinners: Dinner[] = [];

  constructor(private dinnerService: HostDinnersService) { }

  ngOnInit() {
    this.getDinners()
    this.getActive()
    this.getUpcoming()
  }

  getDinners() {
    this.dinnerService.getDinners().subscribe(res=> {
      this.dinners = {...res}
      console.log(this.dinners)
    })
  }

  getActive(): void{
    this.dinnerService.getActiveDinners().subscribe(res=> {
      this.activeDinners = {...res}
      console.log(this.activeDinners)
    })
  }
  getUpcoming(): void{
    this.dinnerService.getUpcomingDinners().subscribe(res=> {
      this.upcomingDinners = {...res}
      console.log(this.upcomingDinners)
    })
  }

}
