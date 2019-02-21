import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZmqComponent } from './zmq.component';

describe('ZmqComponent', () => {
  let component: ZmqComponent;
  let fixture: ComponentFixture<ZmqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZmqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZmqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
