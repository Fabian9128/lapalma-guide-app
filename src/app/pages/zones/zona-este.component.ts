import { Component } from '@angular/core';
// COMPONENTS
import { ZonesComponent } from '../../shared/components/zones/zones.component';

@Component({
  selector: 'app-zona-este',
  standalone: true,
  imports: [ZonesComponent],
  template: `<app-zone zona="Este"></app-zone>`
})
export class ZonaEsteComponent {}
