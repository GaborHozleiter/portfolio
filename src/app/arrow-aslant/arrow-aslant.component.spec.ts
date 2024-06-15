import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowAslantComponent } from './arrow-aslant.component';

describe('ArrowAslantComponent', () => {
  let component: ArrowAslantComponent;
  let fixture: ComponentFixture<ArrowAslantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowAslantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowAslantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
