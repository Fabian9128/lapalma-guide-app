import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RestaurantesComponent } from './pages/restaurantes/restaurantes.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { ZonaNoresteComponent } from './pages/zones/zona-noreste.component';
import { ZonaEsteComponent } from './pages/zones/zona-este.component';
import { ZonaSurComponent } from './pages/zones/zona-sur.component';
import { ZonaValleComponent } from './pages/zones/zona-valle.component';
import { ZonaNoroesteComponent } from './pages/zones/zona-noroeste.component';

export const routes: Routes =
[
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'restaurantes', component: RestaurantesComponent },
      { path: 'actividades', component: ActividadesComponent },
      { path: 'zona-noreste', component: ZonaNoresteComponent },
      { path: 'zona-este', component: ZonaEsteComponent },
      { path: 'zona-sur', component: ZonaSurComponent },
      { path: 'zona-valle', component: ZonaValleComponent },
      { path: 'zona-noroeste', component: ZonaNoroesteComponent }
    ]
  }
];
