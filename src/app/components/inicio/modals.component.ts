import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

declare let $: any;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styles: [
  ]
})
export class ModalsComponent implements OnInit {
  
  constructor(public modalService: ModalService) { }

  ngOnInit(): void {
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
