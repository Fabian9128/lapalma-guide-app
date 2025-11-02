import { Component, OnInit } from '@angular/core';
// MODULES
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restaurantes',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
})
export class RestaurantesComponent implements OnInit
{
  restaurantes: Restaurante[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Restaurante[]>('assets/data/restaurantes.json')
      .subscribe((data) => {
        this.restaurantes = data;
      });
  }
}
