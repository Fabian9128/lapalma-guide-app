import { Component } from '@angular/core';
// COMPONENTS
import { ZonesComponent } from '../../shared/components/zones/zones.component';

@Component({
  selector: 'app-zona-noroeste',
  standalone: true,
  imports: [ZonesComponent],
  template: `<app-zone zona="Noroeste"></app-zone>`
})
export class ZonaNoroesteComponent {}
