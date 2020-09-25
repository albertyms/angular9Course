import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ImagenesYoService {

  imagenNombre: string;
  imagenPath: string;

  imagenSubir: File;
  imagenSel: string | ArrayBuffer;

  mostrarNombre = false;

  img1 = `${URL}/uploadYo/Algo123/1a.jpg`;
  img3 = `${URL}/uploadYo/Algo123/3a.jpg`;
  img2 = `${URL}/uploadYo/Algo123/2a.jpg`;
  img4 = `${URL}/uploadYo/Algo123/4a.jpg`;

  imagenesYo = [
    {
      img: `${URL}/uploadYo/Algo123/1a.jpg`
    },
    {
      img: `${URL}/uploadYo/Algo123/3a.jpg`
    },
    {
      img: `${URL}/uploadYo/Algo123/2a.jpg`
    },
    {
      img: `${URL}/uploadYo/Algo123/4a.jpg`
    }
  ]

  constructor() { }
}
