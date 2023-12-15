import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SupabaseService } from './supabase/supabase.service';
import { AccountComponent } from './supabase-auth/account/account.component';
import { AuthComponent } from './supabase-auth/auth/auth.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AccountComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [SupabaseService],
})
export class AppComponent implements OnInit {
  title = 'angular-user-management';

  session = this.supabase.session;

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit() {
    this.supabase.authChanges((_, session) => (this.session = session));
  }
}
