import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // Simulamos que el usuario está autenticado
  isLoggedIn(): boolean {
    // Aquí podrías agregar lógica real para verificar si el usuario está autenticado
    return !!localStorage.getItem('token');  // Ejemplo sencillo
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
  }
}
