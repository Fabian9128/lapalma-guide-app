import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-zona-noroeste',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './zona-noroeste.component.html',
  styleUrls: ['./zona-noroeste.component.scss'],
})
export class ZonaNoroesteComponent {}
