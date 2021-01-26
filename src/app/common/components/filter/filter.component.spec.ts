import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { RouterTestingModule } from '@angular/router/testing';

fdescribe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.FILTER_YEARS.length).toEqual(15);
    expect(component.LAUNCH_STATUS.length).toEqual(2);
  });

  it('should toggle the year', () => {
    component.launch_year = '2010';
    expect(component.toggleSelection('launch_year', '2010')).toBe(false);
  });

  it('should toggle the launch success', () => {
    component.launch_success = 'true';
    expect(component.toggleSelection('launch_success', 'true')).toBe(false);
  });

  it('should toggle the landing success', () => {
    component.land_success = 'true';
    expect(component.toggleSelection('land_success', 'true')).toBe(false);
  });
});
