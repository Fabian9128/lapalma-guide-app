import { Component, OnInit, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDrawer } from '@angular/material/sidenav';
// MODULES
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
// COMPONENTS
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  @Input() drawer: MatDrawer | null = null;

  router = inject(Router);
  http = inject(HttpClient);

  zones: Zones[] = [];

  ngOnInit(): void {
    this.http.get<{ zones: Zones[] }>('assets/data/coordenadas.json').subscribe((data) => {
      this.zones = data.zones;
    });
  }

  goTo(section: string): void {
    this.router.navigate([`/${section}`]);
    this.drawer?.close();
  }

  get isHome(): boolean {
    return this.router.url === '/';
  }
}
