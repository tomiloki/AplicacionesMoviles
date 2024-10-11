import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Asegúrate de usar compat
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage {
  email: string = '';

  constructor(private afAuth: AngularFireAuth, private toastController: ToastController) {}

  async resetPassword() {
    try {
      await this.afAuth.sendPasswordResetEmail(this.email);
      this.mostrarMensaje('Correo de restablecimiento enviado');
    } catch (error) {
      this.mostrarMensaje('Error al enviar correo de restablecimiento');
      console.error('Error al restablecer la contraseña: ', error);
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
