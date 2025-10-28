import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule, MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent
{
  @Input() drawer: MatDrawer | null = null;

  private router = inject(Router);

  navigateToNoreste()
  {
    this.router.navigate(['/zona-noreste']);
    this.drawer?.close();
  }

  navigateToEste()
  {
    this.router.navigate(['/zona-este']);
    this.drawer?.close();
  }

  navigateToSur()
  {
    this.router.navigate(['/zona-sur']);
    this.drawer?.close();
  }

  navigateToValle()
  {
    this.router.navigate(['/zona-valle']);
    this.drawer?.close();
  }

  navigateToNoroeste()
  {
    this.router.navigate(['/zona-noroeste']);
    this.drawer?.close();
  }
}
