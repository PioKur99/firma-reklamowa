import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowieszoneComponent } from './powieszone.component';

describe('PowieszoneComponent', () => {
  let component: PowieszoneComponent;
  let fixture: ComponentFixture<PowieszoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowieszoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowieszoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
