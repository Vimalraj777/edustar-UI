import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralprofileComponent } from './generalprofile.component';

describe('GeneralprofileComponent', () => {
  let component: GeneralprofileComponent;
  let fixture: ComponentFixture<GeneralprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
