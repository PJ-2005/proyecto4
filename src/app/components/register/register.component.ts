import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    this.auth.register(this.username, this.password).subscribe({
      next: (res) => {
        alert(res);
        this.router.navigate(['/login']);
      },
      error: () => alert('Error al registrar')
    });
  }
}
