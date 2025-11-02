import { Component, OnInit } from '@angular/core';
// MODULES
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss'],
})
export class ActividadesComponent implements OnInit
{
  actividades: Actividad[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Actividad[]>('assets/data/actividades.json')
      .subscribe((data) => {
        this.actividades = data;
      });
  }
}
