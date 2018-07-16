import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvExtendedPlusComponent } from './cv-extended-plus.component';

describe('CvExtendedPlusComponent', () => {
  let component: CvExtendedPlusComponent;
  let fixture: ComponentFixture<CvExtendedPlusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvExtendedPlusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvExtendedPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
