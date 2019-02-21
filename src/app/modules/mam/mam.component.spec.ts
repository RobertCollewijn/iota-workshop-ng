import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MamComponent } from './mam.component';

describe('MamComponent', () => {
  let component: MamComponent;
  let fixture: ComponentFixture<MamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
