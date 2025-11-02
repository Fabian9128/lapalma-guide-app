import { Component } from '@angular/core';
// COMPONENTS
import { ZonesComponent } from '../../shared/components/zones/zones.component';

@Component({
  selector: 'app-zona-valle',
  standalone: true,
  imports: [ZonesComponent],
  template: `<app-zone zona="Valle"></app-zone>`
})
export class ZonaValleComponent {}
