import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenesYoService } from 'src/app/services/imagenes-yo.service';
import { NoticiaService } from 'src/app/services/noticia.service';
import { Noticia, RespuestaNoticia } from 'src/app/interfaces/noticias'
import { TooltipService } from 'src/app/services/tooltip.service';

declare let $: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styles: [
  ]
})

export class InicioComponent implements OnInit {

  mostrarYo = true;

  noticias: Noticia[] = [];

  constructor(
    private router: Router,
    public noticiasService: NoticiaService,
    public imagenesYo: ImagenesYoService,
    public tooltipService: TooltipService) { }

  ngOnInit(): void {
    setTimeout(() => {
     this.tooltipService.abrirTooltipHover();
    }, 150);
    this.noticiasService.noticiaCompleta = false;
    //Obtener ultimas noticias
    this.noticiasService.getUltimasNoticias()
      .subscribe((res: RespuestaNoticia) => {
        this.noticias.push(...res.noticias.slice(0, 3));
      });
  }

  yoMostar() {
    this.mostrarYo = !this.mostrarYo;
  }

  tecnologias() {
    $('#modalTecnologias').modal();
  }

  sobreMi() {
    $('#sobreMi').modal();
  }

  mostrarNoticia(noticia: Noticia) {
    this.tooltipService.cerrarTooltip();
    this.noticiasService.noticiaCompleta = true;
    this.noticiasService.noticiaSel = noticia;
    setTimeout(() => {
      this.router.navigateByUrl('noticiaCompleta');
    }, 100);
  }

}
