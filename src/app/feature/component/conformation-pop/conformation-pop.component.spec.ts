import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformationPopComponent } from './conformation-pop.component';

describe('ConformationPopComponent', () => {
  let component: ConformationPopComponent;
  let fixture: ComponentFixture<ConformationPopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConformationPopComponent]
    });
    fixture = TestBed.createComponent(ConformationPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
