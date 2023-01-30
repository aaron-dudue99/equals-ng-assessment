import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnerDetailComponent } from './dinner-detail.component';

describe('DinnerDetailComponent', () => {
  let component: DinnerDetailComponent;
  let fixture: ComponentFixture<DinnerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinnerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
