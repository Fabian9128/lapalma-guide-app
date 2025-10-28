import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-zona-noreste',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './zona-noreste.component.html',
  styleUrls: ['./zona-noreste.component.scss'],
})
export class ZonaNoresteComponent {}
