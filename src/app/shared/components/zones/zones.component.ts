import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// MODULES
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-zone',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ZonesComponent implements OnInit
{
  @Input() zona!: string;

  restaurantes: Restaurante[] = [];
  actividades: Actividad[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (!this.zona) return;

    this.http.get<Restaurante[]>('assets/data/restaurantes.json').subscribe((data) => {
      this.restaurantes = data.filter((r) => r.zona === this.zona);
    });

    this.http.get<Actividad[]>('assets/data/actividades.json').subscribe((data) => {
      this.actividades = data.filter((a) => a.zona === this.zona);
    });
  }
}
