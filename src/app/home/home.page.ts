import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importamos FormBuilder y Validators
import { FirebaseService } from '../services/firebase.service'; // Asegúrate de que el servicio esté correctamente importado
import { Usuario } from '../interfaces'; // Importa la interfaz Usuario
import { ToastController } from '@ionic/angular'; // Para mostrar mensajes

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
    private toastController: ToastController // Inyectamos el controlador de Toast
  ) {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      profesion: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(1)]],
      nivel: ['', [Validators.required, Validators.min(1)]],
    });
  }

  async guardar() {
    if (this.userForm.valid) {
      const newUser: Usuario = this.userForm.value;
      const path = 'usuarios'; // Corregimos el path

      try {
        await this.firebaseService.createDoc<Usuario>(newUser, path);
        this.mostrarMensaje('Usuario guardado correctamente');
      } catch (error) {
        this.mostrarMensaje('Error al guardar el usuario');
        console.error('Error al guardar en Firebase: ', error);
      }
    } else {
      this.mostrarMensaje('Por favor completa todos los campos');
    }
  }

  async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
    });
    toast.present();
  }
}
