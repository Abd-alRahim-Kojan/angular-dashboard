import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRoomComponent } from './control-room.component';

describe('ControlRoomComponent', () => {
  let component: ControlRoomComponent;
  let fixture: ComponentFixture<ControlRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlRoomComponent]
    });
    fixture = TestBed.createComponent(ControlRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
