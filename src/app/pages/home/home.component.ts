import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
// MODULES
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
// COMPONENTS
import { HeaderComponent } from '../../shared/components/header/header.component';
import { MenuComponent } from '../../shared/components/menu/menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    HeaderComponent,
    MenuComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent
{
  router = inject(Router);

  goTo(section: string) {
    this.router.navigate([`/${section}`]);
  }

  get isHome(): boolean {
    return this.router.url === '/';
  }
}
