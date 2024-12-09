import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/services/authentification-service.service';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {


  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthentificationService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  login(d: any): void {
    this.authService.singin(d).subscribe(
      (response) => {
        // Stockez le jeton JWT dans le stockage local
        localStorage.setItem('access_token', response.accessToken);
        localStorage.setItem('role', response.user.role);
      }
    );
  }

}
