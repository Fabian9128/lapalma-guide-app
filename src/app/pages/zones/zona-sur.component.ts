import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Equipo, PlantillasData } from '../../core/models/models';

@Component({
  selector: 'app-zona-sur',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule],
  templateUrl: './zona-sur.component.html',
  styleUrls: ['./zona-sur.component.scss'],
})
export class ZonaSurComponent
{
  plantillas$: Observable<PlantillasData>;
  filteredEquipos: Equipo[] = [];
  islas: string[] = [];
  selectedIsla: string = 'LA PALMA';

  constructor(private http: HttpClient)
  {
    this.plantillas$ = this.http.get<PlantillasData>('assets/plantillas.json');
    this.plantillas$.subscribe(data =>
    {
      this.islas = Array.from(new Set(data.equipos.map(e => e.isla)));
      this.filteredEquipos = data.equipos.filter(e => e.isla === this.selectedIsla);
    });
  }

  filterByIsla()
  {
    this.plantillas$.subscribe(data =>
    {
      if (this.selectedIsla)
      {
        this.filteredEquipos = data.equipos.filter(e => e.isla === this.selectedIsla);
      }
    });
  }
}
