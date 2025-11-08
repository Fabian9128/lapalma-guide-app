import { Component, Inject, LOCALE_ID } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
// MODULES
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-actividades-modal-details',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './actividades-modal-details.component.html',
  styleUrls: ['./actividades-modal-details.component.scss'],
  providers: [{ provide: LOCALE_ID, useValue: 'es-ES' }],
})
export class ActividadesModalDetailsComponent
{
  formatDate: Date | null = null;

  constructor(
    public dialogRef: MatDialogRef<ActividadesModalDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data?.fecha) {
      this.formatDate = new Date(data.fecha);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
