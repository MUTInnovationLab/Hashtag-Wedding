import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LookerDashboardPage } from './looker-dashboard.page';

describe('LookerDashboardPage', () => {
  let component: LookerDashboardPage;
  let fixture: ComponentFixture<LookerDashboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LookerDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
