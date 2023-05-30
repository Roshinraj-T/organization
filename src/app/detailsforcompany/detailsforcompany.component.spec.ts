import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsforcompanyComponent } from './detailsforcompany.component';

describe('DetailsforcompanyComponent', () => {
  let component: DetailsforcompanyComponent;
  let fixture: ComponentFixture<DetailsforcompanyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsforcompanyComponent]
    });
    fixture = TestBed.createComponent(DetailsforcompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
