import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styles: [
  ]
})
export class MensajesComponent implements OnInit {

  mensajesEmail: string[] = []

  mensajeSel: any;

  constructor(public mensajes: MensajesService, private router: Router) { }

  ngOnInit(): void {
    this.mensajes.getMensajes()
      .subscribe((res: any) => {
        this.mensajesEmail.push(...res.mensajes);
        if (this.mensajesEmail.length === 0) {
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: true,
            customClass: {
              confirmButton: 'back9'
            }
          });

          Toast.fire({
            title: 'No hay ningun mensaje.',
            background: 'rgb(233,233,0)'
          });
        }
      });

    this.mensajes.sumaMensajes();
  }

  borrarMensaje(mensaje: string) {
    this.mensajeSel = mensaje;
    this.mensajes.borrarMensajes(this.mensajeSel._id)
      .subscribe(() => {
        this.router.navigateByUrl('/inicio', { skipLocationChange: true })
          .then(() => this.router.navigate(['mensajes']));
      });
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000
    });

    Toast.fire({
      title: 'Mensaje elimado.',
      background: 'rgb(233,233,0)'
    });
  }

}
