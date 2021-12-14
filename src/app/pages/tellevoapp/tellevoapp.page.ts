import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApirestService } from 'src/app/services/apirest.service';



@Component({
  selector: 'app-tellevoapp',
  templateUrl: './tellevoapp.page.html',
  styleUrls: ['./tellevoapp.page.scss'],
})

export class TellevoappPage implements OnInit {
  conductores: any[] = [];
  destinos: any[] = [];
  ciudades: any[] = [];
  p: number;
  r: number;
  usuario: any;
  destino: String;
  nombreCiudadO: string;
  nombreCiudadD: string;
  origen: any;
  ciudadD: any;
  cantPasa: number;
  username = [];
  pasajeros = [{ id: 1, cant: 1 }, { id: 2, cant: 2 }, { id: 3, cant: 3 }, { id: 4, cant: 4 }];
  
  constructor(public router: Router, public activatedRoute: ActivatedRoute, private apirestService: ApirestService) {
    this.username = JSON.parse(localStorage.getItem('data'));
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      }
    });
  }

  ngOnInit(): void {
   
   this.apirestService.getCiudades().subscribe(ciudad => this.ciudades = ciudad.ciudades)
   this.apirestService.getDestinos().subscribe(destino => this.destinos = destino.destinos)
  }
  
  
  logout() {
    /* Funcion para eliminar usuario al Logout 
      let user = {
      username: "",
      password: "",
      confirmPassword: "",
      mail: "",
      car: ""
    }
    localStorage.setItem('data', JSON.stringify(user)); */
    return this.router.navigate(['/home'])
  }
  getConductor(){
    this.apirestService.getConductores().subscribe(conductor => {
      let conductoresFiltro = conductor.conductores
      this.conductores = conductoresFiltro.filter(conductorFilter => {
        return conductorFilter.destino === this.origen
      })
    })
  }
  calcViaje() {
    this.nombreCiudadD = this.ciudadD.name
    this.nombreCiudadO = this.origen.name
    this.r = this.ciudadD.precio / this.cantPasa
    this.p = this.ciudadD.precio
  }

}
