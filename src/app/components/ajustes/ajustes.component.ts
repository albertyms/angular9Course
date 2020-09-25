import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Foto } from 'src/app/interfaces/foto';
import { ImagenesYoService } from 'src/app/services/imagenes-yo.service';
import { TecnologiaSobreMiService } from 'src/app/services/tecnologia-sobre-mi.service';
import { TooltipService } from 'src/app/services/tooltip.service';
import Swal from 'sweetalert2';

declare let $: any;

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.component.html',
  styles: [
  ]
})
export class AjustesComponent implements OnInit {

  fotoSel: Foto;

  tecnologiasDest : string[] = [];

  sobreMiBackend: any;

  constructor(
    public imagenYoService: ImagenesYoService, 
    public tecSobre: TecnologiaSobreMiService,
    public tooltipService: TooltipService) { }

  ngOnInit(): void {
    this.tooltipService.abrirTooltip();
    setTimeout(() => {
      this.tooltipService.abrirTooltipHover();
    }, 150);
    this.tecSobre.getTecnologia()
    .subscribe((res: any) =>{
      this.tecnologiasDest.push(...res.tecnologias);
    });

    this.tecSobre.getSobreMi()
    .subscribe(async (res: any) =>{
      this.sobreMiBackend = await res.sobreMi[0];
    });
  }

  editarImgYo(imagen: Foto) {
    this.fotoSel = imagen;
    console.log(this.fotoSel);
  
    if(this.fotoSel.img === this.imagenYoService.img1) {
      $('#imagen').modal();
      this.imagenYoService.imagenNombre = '1a.jpg';
      this.imagenYoService.imagenPath = this.fotoSel.img;
      this.tooltipService.cerrarTooltip();
    }
    if(this.fotoSel.img === this.imagenYoService.img2) {
      $('#imagen').modal();
      this.imagenYoService.imagenNombre = '2a.jpg';
      this.imagenYoService.imagenPath = this.fotoSel.img;
      this.tooltipService.cerrarTooltip();
    }
    if(this.fotoSel.img === this.imagenYoService.img3) {
      $('#imagen').modal();
      this.imagenYoService.imagenNombre = '3a.jpg';
      this.imagenYoService.imagenPath = this.fotoSel.img;
      this.tooltipService.cerrarTooltip();
    }
    if(this.fotoSel.img === this.imagenYoService.img4) {
      $('#imagen').modal();
      this.imagenYoService.imagenNombre = '4a.jpg';
      this.imagenYoService.imagenPath = this.fotoSel.img;
      this.tooltipService.cerrarTooltip();
    }
  }

  editarTec(tec: string) {
    this.tecSobre.mostrarTec = true;
    this.tecSobre.tecSel = tec;
    console.log(this.tecSobre.tecSel);
    this.tooltipService.cerrarTooltip();
    setTimeout(() => {
      $('#tecnologia').modal();
    }, 100);
  }

  actualizarSobreMi() {
    this.tecSobre.mostrarSobreMi = true;
    this.tooltipService.settings = false;
    this.tooltipService.settings3 = false;
  }

  actualizarSobreMiFull(f: NgForm) {
    this.tecSobre.actualizarSobreMi(this.sobreMiBackend, this.sobreMiBackend._id);
    this.tecSobre.mostrarSobreMi = false;
    this.tooltipService.settings = true;
    this.tooltipService.settings3 = true;
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000
    });

    Toast.fire({
      title: 'Información actualizada.',
      background: 'rgb(233,233,0)'
    });
  }

  cerrarSobreMi() {
    this.tecSobre.mostrarSobreMi = false;
    this.tooltipService.settings = true;
    this.tooltipService.settings3 = true;
    window.scrollTo(0, 0);
  }

}
