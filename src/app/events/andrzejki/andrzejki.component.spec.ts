import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndrzejkiComponent } from './andrzejki.component';

describe('AndrzejkiComponent', () => {
  let component: AndrzejkiComponent;
  let fixture: ComponentFixture<AndrzejkiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AndrzejkiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndrzejkiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
