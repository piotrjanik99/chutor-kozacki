import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WigiliaComponent } from './wigilia.component';

describe('WigiliaComponent', () => {
  let component: WigiliaComponent;
  let fixture: ComponentFixture<WigiliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WigiliaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WigiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
