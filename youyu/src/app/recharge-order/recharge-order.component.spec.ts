import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeOrderComponent } from './recharge-order.component';

describe('RechargeOrderComponent', () => {
  let component: RechargeOrderComponent;
  let fixture: ComponentFixture<RechargeOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargeOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
