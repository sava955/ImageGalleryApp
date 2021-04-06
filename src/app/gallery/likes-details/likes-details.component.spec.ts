import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesDetailsComponent } from './likes-details.component';

describe('LikesDetailsComponent', () => {
  let component: LikesDetailsComponent;
  let fixture: ComponentFixture<LikesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
