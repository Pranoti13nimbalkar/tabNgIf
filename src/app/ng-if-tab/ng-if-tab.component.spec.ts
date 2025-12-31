import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfTabComponent } from './ng-if-tab.component';

describe('NgIfTabComponent', () => {
  let component: NgIfTabComponent;
  let fixture: ComponentFixture<NgIfTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
