import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tellevoapp',
  templateUrl: './tellevoapp.page.html',
  styleUrls: ['./tellevoapp.page.scss'],
})

export class TellevoappPage implements OnInit {
  p: number;
  r: number;
  usuario: any;
  destino: String;
  nombreCiudadO: string;
  nombreCiudadD: string;
  ciudadO: any;
  ciudadD: any;
  cantPasa: number;
  username = [];
  ciudad = [{ id: 1, name: "Valparaiso", precio: 3000 }, { id: 2, name: "Viña del Mar", precio: 6000 }, { id: 3, name: "Quillota", precio: 9000 }, { id: 4, name: "Quilpue", precio: 11000 }];
  pasajeros = [{ id: 1, cant: 1 }, { id: 2, cant: 2 }, { id: 3, cant: 3 }, { id: 4, cant: 4 }];
  conductores = [{ id: 1, name: "Marcelo Rodriguez" }, { id: 2, name: "Bastian Leyton" }, { id: 3, name: "Michael Schumagger" }]
  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
    this.username = JSON.parse(localStorage.getItem('data'));
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      }
    });
  }

  ngOnInit(): void {
   

    

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
  calcViaje() {
    this.nombreCiudadD = this.ciudadD.name
    this.nombreCiudadO = this.ciudadO.name
    this.r = this.ciudadD.precio / this.cantPasa
    this.p = this.ciudadD.precio
  }

}
