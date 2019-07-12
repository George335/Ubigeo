import { Component, OnInit } from '@angular/core';
import { UbigeosService } from 'src/app/services/ubigeos.service';
import { UbigeoModel } from 'src/app/models/ubigeo.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ubigeos',
  templateUrl: './ubigeos.component.html',
  styles: []
})
export class UbigeosComponent implements OnInit {

  ubigeos: UbigeoModel[] = [];

  cargando = false;

  constructor( private ubigeosService: UbigeosService) { }

  ngOnInit() {

    this.cargando = true;

    //Inicializo la obtención de datos de héroes.
    this.ubigeosService.getUbigeos()
      .subscribe( resp => {
        this.ubigeos = resp;
        this.cargando = false;
      });
      
  }

}
