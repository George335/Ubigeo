import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UbigeosComponent } from './pages/ubigeos/ubigeos.component';
import { UbigeoComponent } from './pages/ubigeo/ubigeo.component';

const routes: Routes = [
  { path: 'ubigeos', component: UbigeosComponent },
  { path: 'ubigeo/:id', component: UbigeoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'ubigeos' }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
