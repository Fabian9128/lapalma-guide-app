import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-zona-valle',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './zona-valle.component.html',
  styleUrls: ['./zona-valle.component.scss'],
})
export class ZonaValleComponent {}
