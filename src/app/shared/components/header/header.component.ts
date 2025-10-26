import { Component, Input, OnInit, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
// MODULES
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() drawer: MatDrawer | null = null;

  pageTitle = 'GUÍA LA PALMA APP';
  isInicio = false;

  private router = inject(Router);

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updatePageTitle();
      });

    this.updatePageTitle();
  }

  updatePageTitle(): void
  {
    const route = this.router.url;

    if (route.includes('/zona-noreste')) {
      this.pageTitle = 'ZONA NORESTE';
      this.isInicio = false;
    } else if (route.includes('/zona-sur')) {
      this.pageTitle = 'ZONA SUR';
      this.isInicio = false;
    } else if (route.includes('/zona-valle')) {
      this.pageTitle = 'ZONA VALLE';
      this.isInicio = false;
    } else if (route.includes('/zona-noroeste')) {
      this.pageTitle = 'ZONA NOROESTE';
      this.isInicio = false;
    } else if (route.includes('/zona-este')) {
      this.pageTitle = 'ZONA ESTE';
      this.isInicio = false;
    } else {
      this.pageTitle = 'GUÍA LA PALMA APP';
      this.isInicio = true;
    }
  }

  toggleMenu(): void {
    this.drawer?.toggle();
  }
}
