import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuardService {
  constructor(private authService: AuthentificationService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean
      | UrlTree> | boolean | UrlTree {
    if (this.authService._is_logged()) {
      return true
    } return false;
  }

}
