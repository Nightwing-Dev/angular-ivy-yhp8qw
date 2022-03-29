import { Component, VERSION } from '@angular/core';
import { Princesas } from './modelos-interfaces/princesas.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  registro = {
    nombre:'',
    email:'',
    password:''
  }

  usuarioRegistro(){
    console.log(this.registro)
  }

  amigos = 'Estos son los amigos de ella:';
  princesitas: Princesas[] = [
    {
      nombre: 'Ariel',
      ciudad: 'Reino Atlantida',
      imagen: 'https://i.ibb.co/CBhQvKS/Ariel.jpg',
      familiaresUamigos: [
        ' Poseidon ',
        ' flounder ',
        ' sebastian ',
        ' principe elric ',
      ],
    },
    {
      nombre: 'Blancanieves',
      ciudad: 'Reino Alemania',
      imagen: 'https://i.ibb.co/93Ypt0S/blancanieves.jpg',
      familiaresUamigos: [
        ' Poseidon ',
        ' flounder ',
        ' sebastian ',
        ' principe elric ',
      ],
    },
    {
      nombre: 'Rapunzel',
      ciudad: 'Alemania',
      imagen: 'https://i.ibb.co/89Xn6Q2/Rapunzel.jpg',
      familiaresUamigos: [
        ' Poseidon ',
        ' flounder ',
        ' sebastian ',
        ' principe elric ',
      ],
    },
    {
      nombre: 'Mulan',
      ciudad: 'China',
      imagen: 'https://i.ibb.co/9GGM2WQ/Mulan.jpg',
      familiaresUamigos: [
        ' Poseidon ',
        ' flounder ',
        ' sebastian ',
        ' principe elric ',
      ],
    },
    {
      nombre: 'Jasmin',
      ciudad: 'Agrabah',
      imagen: 'https://i.ibb.co/kGnTjPG/Jasmin.webp',
      familiaresUamigos: [
        ' Poseidon ',
        ' flounder ',
        ' sebastian ',
        ' principe elric ',
      ],
    },
    {
      nombre: 'Merida',
      ciudad: 'Escocia',
      imagen: 'https://i.ibb.co/XCMF8XQ/Merida.jpg',
      familiaresUamigos: [
        ' Poseidon ',
        ' flounder ',
        ' sebastian ',
        ' principe elric ',
      ],
    },
    {
      nombre: 'Cenicienta',
      ciudad: 'Francia',
      imagen: 'https://i.ibb.co/N1yvhN2/cenicienta.jpg',
      familiaresUamigos: [
        ' Poseidon ',
        ' flounder ',
        ' sebastian ',
        ' principe elric ',
      ],
    },
  ];
}
