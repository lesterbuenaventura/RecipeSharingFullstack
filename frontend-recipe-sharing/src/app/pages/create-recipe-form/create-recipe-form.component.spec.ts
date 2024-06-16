import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipeFormComponent } from './create-recipe-form.component';

describe('CreateRecipeFormComponent', () => {
  let component: CreateRecipeFormComponent;
  let fixture: ComponentFixture<CreateRecipeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRecipeFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateRecipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
