import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchdemoComponent } from './ngswitchdemo.component';

describe('NgswitchdemoComponent', () => {
  let component: NgswitchdemoComponent;
  let fixture: ComponentFixture<NgswitchdemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgswitchdemoComponent]
    });
    fixture = TestBed.createComponent(NgswitchdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
