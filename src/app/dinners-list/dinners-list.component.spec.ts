import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnersListComponent } from './dinners-list.component';

describe('DinnersListComponent', () => {
  let component: DinnersListComponent;
  let fixture: ComponentFixture<DinnersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinnersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinnersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
