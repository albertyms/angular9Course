import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioService } from './usuario.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class TecnologiaSobreMiService {

  tecSel: any;
  mostrarTec = false;
  mostrarSobreMi = false;

  constructor(private http: HttpClient, private usuarioService: UsuarioService) { }

  getTecnologia() {
    return this.http.get(`${URL}/tecnologia`);
  }

  getSobreMi() {
    return this.http.get(`${URL}/sobreMi`);
  }

  actualizarTecnologia(tec: string, id: string) {
    const headers = {
      miToken: this.usuarioService.token,
    };
    return this.http.post(`${URL}/tecnologia/update/${id}`, tec, { headers })
      .subscribe();
  }

  actualizarSobreMi(sobreMi: string, id: string) {
    const headers = {
      miToken: this.usuarioService.token,
    };
    return this.http.post(`${URL}/sobreMi/update/${id}`, sobreMi, { headers })
      .subscribe();
  }

}
