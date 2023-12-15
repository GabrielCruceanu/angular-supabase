import { Component, OnInit } from '@angular/core';
import { AccountComponent } from '../account/account.component';
import { AuthComponent } from '../auth/auth.component';
import { NgIf } from '@angular/common';
import { SupabaseService } from '../../supabase/supabase.service';

@Component({
  selector: 'app-supabase-auth',
  standalone: true,
  imports: [AccountComponent, AuthComponent, NgIf],
  templateUrl: './supabase-auth.component.html',
  styleUrl: './supabase-auth.component.scss',
})
export class SupabaseAuthComponent implements OnInit {
  session = this.supabase.session;

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit() {
    this.supabase.authChanges((_, session) => (this.session = session));
  }
}
