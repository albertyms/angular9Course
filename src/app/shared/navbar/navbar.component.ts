import { TranslationWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MensajesService } from 'src/app/services/mensajes.service';
import { ModalService } from 'src/app/services/modal.service';
import { TooltipService } from 'src/app/services/tooltip.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

declare let $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  ojo = true;
  login1: boolean;
  input1: boolean;
  clave = '5f68d129f50cb9716408561a';

  constructor(public modalService: ModalService,
    public mensajes: MensajesService,
    public usuarioService: UsuarioService, 
    public tooltipService: TooltipService) {
    this.modalService.ojo2 = true;
  }

  ngOnInit(): void {
    this.mensajes.sumaMensajes();
  }

  cerrarNavbar() {
    this.tooltipService.cerrarTooltip();
    this.login1 = false;
    this.input1 = false;
    window.scrollTo(0, 0);
  }

  alerta() {
    $('#alerta').modal();
    this.cerrarNavbar();
  }

  onClick1() {
    this.ojo = false;
    this.login1 = false;
    this.tooltipService.abrirTooltip();
  }

  onClick2() {
    this.ojo = true;
    this.login1 = true;
    this.tooltipService.abrirTooltip();
    this.modalService.ojo2 = false;
  }

  entrar() {
    this.login1 = false;
    this.input1 = true;
    this.tooltipService.cerrarTooltip();
    $(document).ready(() => {
      $('#focusClave').trigger('focus');
    });
  }

  inputLogin() {
/*     console.log(this.clave);
    console.log(this.usuarioService.pass); */
    if (this.clave !== '5f68d129f50cb9716408561a') {
      this.login1 = false;
      this.input1 = false;
      this.clave = '';
      this.cerrarNavbar();
    } else {
      this.login1 = false;
      this.input1 = false;
      this.clave = '';
      this.cerrarNavbar();
      $('#loginModal').modal();
      $(document).ready(() => {
        $('#loginModal').on('shown.bs.modal', () => {
          $('#focusLogin').trigger('focus');
        });
      });
    }
  }

  logOut() {
    this.usuarioService.logout();
    this.cerrarNavbar();
    this.modalService.logOut();
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000
    });

    Toast.fire({
      title: 'Usuario offline.',
      background: 'rgb(233,233,0)',
      icon: 'success'
    });
  }

}
