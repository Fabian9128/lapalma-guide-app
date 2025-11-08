import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// MODULES
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
// COMPONENTS
import { ActividadesModalDetailsComponent } from '../../shared/components/modals/actividades-modal-details.component';

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './actividades.component.html',
  styleUrls: ['../../shared/styles/info-cards.scss'],
})
export class ActividadesComponent implements OnInit
{
  actividades: Actividad[] = [];

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.http
      .get<Actividad[]>('assets/data/actividades.json')
      .subscribe((data) => {
        this.actividades = data;
      });
  }

  openInfo(actividad: Actividad) {
    this.dialog.open(ActividadesModalDetailsComponent, {
      width: '600px',
      maxWidth: '95vw',
      data: actividad
    });
  }
}
