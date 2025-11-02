import { Component } from '@angular/core';
// COMPONENTS
import { ZonesComponent } from '../../shared/components/zones/zones.component';

@Component({
  selector: 'app-zona-noreste',
  standalone: true,
  imports: [ZonesComponent],
  template: `<app-zone zona="Noreste"></app-zone>`
})
export class ZonaNoresteComponent {}
