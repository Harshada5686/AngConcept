import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakecardComponent } from './cakecard.component';

describe('CakecardComponent', () => {
  let component: CakecardComponent;
  let fixture: ComponentFixture<CakecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CakecardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CakecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
