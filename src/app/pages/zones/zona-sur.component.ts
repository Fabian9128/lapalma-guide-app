import { Component } from '@angular/core';
// COMPONENTS
import { ZonesComponent } from '../../shared/components/zones/zones.component';

@Component({
  selector: 'app-zona-sur',
  standalone: true,
  imports: [ZonesComponent],
  template: `<app-zone zona="Sur"></app-zone>`
})
export class ZonaSurComponent {}
