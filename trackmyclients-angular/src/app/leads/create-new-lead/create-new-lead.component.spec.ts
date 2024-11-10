import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewLeadComponent } from './create-new-lead.component';

describe('CreateNewLeadComponent', () => {
  let component: CreateNewLeadComponent;
  let fixture: ComponentFixture<CreateNewLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewLeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
