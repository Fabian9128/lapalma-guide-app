import { Component } from '@angular/core';
//MODULES
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-restaurantes',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
})
export class RestaurantesComponent {}
