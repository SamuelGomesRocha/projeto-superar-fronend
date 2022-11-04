import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { GeolocalizationComponent } from './components/pages/geolocalization/geolocalization.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewClienteComponent } from './components/pages/new-cliente/new-cliente.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cliente/novo', component: NewClienteComponent},
  {path: 'cliente/localizacao', component: GeolocalizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
