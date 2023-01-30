import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dinner } from '../dinner';
import { HostDinnersService } from '../host-dinners.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-dinner-detail',
  templateUrl: './dinner-detail.component.html',
  styleUrls: ['./dinner-detail.component.scss']
})
export class DinnerDetailComponent {

  dinner: Dinner | undefined;

  constructor(private dinnerService: HostDinnersService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.getDinner()
  }

  getDinner():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dinnerService.getDinnerById(id)
      .subscribe((dinner: Dinner | undefined) => this.dinner = dinner);
  }

  goBack(): void {
    this.location.back();
  }

}
