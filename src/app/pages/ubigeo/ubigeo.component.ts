import { Component, OnInit } from '@angular/core';
import { UbigeoModel } from 'src/app/models/ubigeo.model';
import { NgForm } from '@angular/forms';
import { UbigeosService } from 'src/app/services/ubigeos.service';

import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ubigeo',
  templateUrl: './ubigeo.component.html',
  styles: []
})
export class UbigeoComponent implements OnInit {

  ubigeo = new UbigeoModel();

  constructor(private ubigeosService: UbigeosService, 
              private route: ActivatedRoute) { }


  ngOnInit() {
    //Obtiene el Id del Routing
    const id = this.route.snapshot.paramMap.get('id');

    //console.log(id);
    if ( id !== 'nuevo' ) {

      this.ubigeosService.getUbigeo( id )
        .subscribe( (resp: UbigeoModel) => {
          this.ubigeo = resp;
          this.ubigeo.id = id;
        });

    }
  }

}
