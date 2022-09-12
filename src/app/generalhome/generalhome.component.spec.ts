import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralhomeComponent } from './generalhome.component';

describe('GeneralhomeComponent', () => {
  let component: GeneralhomeComponent;
  let fixture: ComponentFixture<GeneralhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
