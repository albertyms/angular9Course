import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { TecnologiaSobreMiService } from 'src/app/services/tecnologia-sobre-mi.service';

declare let $: any;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {

  tecnologiasDes: string[] = [];

  tec1: string[] = [];
  tec2: string[] = [];
  tec3: string[] = [];

  sobreMi: any;
  
  constructor(
    public modalService: ModalService,
    private tecSobreMi: TecnologiaSobreMiService) { }

  ngOnInit(): void {
    this.tecSobreMi.getTecnologia()
    .subscribe((res: any) =>{
      this.tecnologiasDes.push(...res.tecnologias);
      this.tec1 = this.tecnologiasDes.slice(0, 3);
      this.tec2 = this.tecnologiasDes.slice(3, 6);
      this.tec3 = this.tecnologiasDes.slice(6, 9);
    });

    this.tecSobreMi.getSobreMi()
    .subscribe((res: any) => {
      this.sobreMi = res.sobreMi;
    });
  }

  cerrarTec() {
    this.modalService.cerrarTec();
  }

  pagina1() {
    this.modalService.pagina1();
  }

  pagina2() {
    this.modalService.pagina2();
  }

  pagina3() {
    this.modalService.pagina3();
  }

  cerrarSobreMi() {
    this.modalService.cerrarSobreMi();
  }

}
