import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app';
import { routes } from './app/app.routes'; // 👈 cambia "appRoutes" por "routes"
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes), // 👈 cambia aquí también
    provideHttpClient()
  ]
}).catch(err => console.error(err));
