import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Compatibilidad con Firebase Auth
import { Router } from '@angular/router'; // Para hacer la redirección
import { ToastController } from '@ionic/angular'; // Para los mensajes tipo toast

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router, // Inyectamos el Router
    private toastController: ToastController
  ) {}

  async login() {
    try {
      // Iniciar sesión con correo y contraseña
      await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      
      // Mostrar un mensaje de éxito
      this.mostrarMensaje('Inicio de sesión exitoso');
      
      // Redirigir al Home después del login
      this.router.navigate(['/home']);
    } catch (error) {
      // Mostrar mensaje de error si algo falla
      this.mostrarMensaje('Error al iniciar sesión');
      console.error('Error al iniciar sesión: ', error);
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
