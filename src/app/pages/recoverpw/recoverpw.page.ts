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
  selector: 'app-recoverpw',
  templateUrl: './recoverpw.page.html',
  styleUrls: ['./recoverpw.page.scss'],
})
export class RecoverpwPage implements OnInit {
/* Form Recover */
  formuRecover: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public router: Router) {

    this.formuRecover = this.fb.group({
      'username': new FormControl("", Validators.required),
      'mail': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
  }
  async save() {
    let f = this.formuRecover.value;
/* Error Datos no Completados */
    if (this.formuRecover.invalid) {
      return await Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes completar todos los campos.',
        showConfirmButton: false,
        timer: 1500
      })

    } else {
      return this.router.navigate(['/login'])
    }
  }
}
