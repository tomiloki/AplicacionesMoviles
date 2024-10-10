import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FirebaseService } from '../services/firebase.service';
import { Usuario } from '../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;
  edades: number[] = [];
  usuarios: Usuario[] = [];

  constructor(public toastController: ToastController,
              public firebaseService: FirebaseService) {
    console.log("hola en el constructor");
    this.initUsers();
  }

  ngOnInit(): void {
    console.log("hola despies en ngon init");
    
  }

  initUsers() {
    this.edades = [2, 20, 10];
    this.usuarios = [
      {
        nombre: 'Jonathan',
        apellido: 'Tenesaca',
        profesion: 'Estudiante',
        edad: 22,
        nivel: 5,
      }
    ]
  }

  guardar() {
    const path = 'usuarios/;'
    const newUser: Usuario = {
      nombre: 'Jonathan',
      apellido: 'Tenesaca',
      profesion: 'Estudiante',
      edad: 22,
      nivel: 5,
      // id: this.firebaseService.createIdDoc,
    };
    this.firebaseService.createDoc<Usuario>(newUser, path).then( res => {
      console.log('respuesta de Firebase: ', res);
    });
  }
}
