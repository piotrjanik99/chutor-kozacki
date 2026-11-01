import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SylwesterComponent } from './sylwester.component';

describe('SylwesterComponent', () => {
  let component: SylwesterComponent;
  let fixture: ComponentFixture<SylwesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SylwesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SylwesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
