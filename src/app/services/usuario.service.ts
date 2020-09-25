import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { pluck } from 'rxjs/operators';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  autenticado: boolean = false;

  pass: string = '';

  constructor(private http: HttpClient, private router: Router) {
    this.getId();
  }

  login(nombre: string, password: string) {
    const data = { nombre, password };

    return new Promise(resolve => {
      this.http.post(`${URL}/usuario/entrar`, data)
        .subscribe((res: any) => {
          if (res.ok) {
            this.guardarToken(res.token)
            resolve(true);
          } else {
            this.logout();
            resolve(false);
          }
        });
    })
  }

  guardarToken(token: string) {
    this.token = token;
  }

  logout() {
    this.token = null;
    this.autenticado = false;
    this.router.navigateByUrl('inicio');
  }

  getId() {
    return this.http.get(`${URL}/sobreMi`)
      .pipe(
        pluck('sobreMi', '0', '_id')
      ).subscribe((res: any) => {
        this.pass = res;
      })
  }
}
