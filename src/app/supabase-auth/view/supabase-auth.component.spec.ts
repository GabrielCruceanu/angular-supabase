import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupabaseAuthComponent } from './supabase-auth.component';

describe('SupabaseAuthComponent', () => {
  let component: SupabaseAuthComponent;
  let fixture: ComponentFixture<SupabaseAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupabaseAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupabaseAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
