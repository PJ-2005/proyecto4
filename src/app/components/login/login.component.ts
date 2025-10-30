import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
  this.auth.login(this.username, this.password).subscribe({
    next: (res) => {
      console.log("Respuesta del backend:", res);

      if (res.ok === true) {
        alert('Login correcto ✅');
        this.router.navigate(['/pedidos']);
      } else {
        alert('Usuario o clave incorrectos ❌');
      }
    },
    error: () => alert('Error en el servidor')
  });
}

}
