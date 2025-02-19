import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class EtudiantGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getRole() === 'etudiant') {
      return true;
    } else {
      this.router.navigate(['/login']); 
      return false;
    }
  }
}
