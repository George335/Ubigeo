import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UbigeoModel } from '../models/ubigeo.model';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UbigeosService {

  private url = 'https://ubigeo-4ff84.firebaseio.com';

  constructor( private http: HttpClient) {


  }

  getUbigeo( id: string ) {
    return this.http.get( `${ this.url }/ubigeos/${ id }.json` );
  }

  getUbigeos() {
    return this.http.get(`${ this.url }/Ubigeos.json`)
            .pipe(
              map( this.crearArreglo ),
              delay(1500)
            );
  }

  private crearArreglo( ubigeoObj: object ) {

    const ubigeos: UbigeoModel[] = [];

    //Hago un recorrido de obj y le asigno un "key"
    Object.keys( ubigeoObj ).forEach( key => {

      //Extraigo el objeto y lo asigno a una referencia
      const heroe: UbigeoModel = ubigeoObj[key];

      heroe.id = key;

      //Almaceno los héroes en el arreglo
      ubigeos.push( heroe );

    });

    //Si no hay información en la base de datos
    if ( ubigeoObj === null ) { return []; }

    return ubigeos;
  }


}
