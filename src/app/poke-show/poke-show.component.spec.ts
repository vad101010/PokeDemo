import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeShowComponent } from './poke-show.component';

describe('PokeShowComponent', () => {
  let component: PokeShowComponent;
  let fixture: ComponentFixture<PokeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
