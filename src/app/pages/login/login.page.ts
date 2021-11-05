import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
/* Form de Login */
  formuLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public router: Router) {

    this.formuLogin = this.fb.group({
      'username': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }
/*   Datos de Login */
  async login() {

    let f = this.formuLogin.value;

    let user = {
      username: f.username,
      password: f.password,
      mail: f.mail,
      car: f.car
    }

    let username = JSON.parse(localStorage.getItem('data'));
  /* Campos no Completados */
    if (this.formuLogin.invalid) {
      return await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes completar todos los campos.',
        showConfirmButton: false,
        timer: 1500
      })
    }
  /* Que usuario y Contraseña coincidan con el LocalStorage */  
    if(username.username === f.username && username.password === f.password){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenid@ ' + username.username,
        showConfirmButton: false,
        timer: 1500
      })
      return this.router.navigate(['/tellevoapp']) 
    }else{
      /* Error Usuario / Contraseña invalido */  
      return await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario o Contraseña Invalido.',
        showConfirmButton: false,
        timer: 1500
      })
    }
    
  }


}
