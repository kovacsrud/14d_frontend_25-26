import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Randuser } from './randuser';

describe('Randuser', () => {
  let component: Randuser;
  let fixture: ComponentFixture<Randuser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Randuser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Randuser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
