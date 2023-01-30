import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dinner } from './dinner';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HostDinnersService {

  constructor(private http: HttpClient) {}

  getDinners(): Observable<Dinner[]> {
    return this.http.get<any>('http://localhost:3000/dinners')
    
  }

  getDinnerById(id: any): Observable<Dinner>{
    const url = `http://localhost:3000/dinners/?id=${id}`;

    return this.http.get<Dinner[]>(url).pipe(
      map(dinners => dinners[0])
    )
  }

  createDinner(dinner: Dinner) {
    this.http.post<Dinner>(`http://localhost:3000/dinners`, dinner).subscribe(res=>{
      alert('Dinner created successfully');
      console.log(res)
    }, err=> {
      console.log(err)
      alert('Dinner Creation Failed');
    })
  }

  getUpcomingDinners(): Observable<Dinner[]> {
    const dinners = this.getDinners();
    const upcomingDinners = dinners.pipe(
      map(dinner => dinner.filter(item=> item.status=== 'upcoming'))
    );

    return upcomingDinners
  }

  getActiveDinners(): Observable<Dinner[]> {
    const dinners = this.getDinners();
    const activeDinners = dinners.pipe(
      map(dinner => dinner.filter(item=> item.status=== 'active'))
    );

    return activeDinners
  }
}
