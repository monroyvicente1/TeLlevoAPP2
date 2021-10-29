import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
/* Datos Registro LOCAL */
export class RegisterPage implements OnInit {

  formuRegister: FormGroup;
  usuario: string;
  constructor(public fb: FormBuilder,
    public alertController: AlertController, public router: Router) {
    this.formuRegister = this.fb.group({
      'username': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmPassword': new FormControl("", Validators.required),
      'mail': new FormControl("", [Validators.required, Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]),
      'car': new FormControl(false)
    });
  }

  ngOnInit() {
  }
  /* Guardar Datos de Registro LOCALSTORAGE */
  async save() {
    let f = this.formuRegister.value;

    let user = {
      username: f.username,
      password: f.password,
      confirmPassword: f.confirmPassword,
      mail: f.mail,
      car: f.car
    }
    /* Campos no Completados */
    if (this.formuRegister.invalid) {
      return await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes completar todos los campos.',
        showConfirmButton: false,
        timer: 1500
      })
    }
    /* Contraseñas Coinciden */

    if (f.password === f.confirmPassword) {
      localStorage.setItem('data', JSON.stringify(user));
      let userOn = JSON.parse(localStorage.getItem('data'));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Bienvenid@ ' + userOn.username,
        showConfirmButton: false,
        timer: 1500
      })
      let navigationExtras: NavigationExtras = {
        state: { usuario: this.usuario }
      }
      return this.router.navigate(['/tellevoapp'], navigationExtras)
      /*Contraseñas no Coinciden*/
    } else {
      return await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Contraseñas no Coinciden.',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }



}
