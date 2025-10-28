import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {   // 👈 renombrar aquí
  private baseUrlCa = 'http://localhost:9696/api/ca_pedido';
  private baseUrlDe = 'http://localhost:9696/api/de_pedido';

  constructor(private http: HttpClient) {}

  getPedidosPorCliente(nombre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrlCa}/cliente/${encodeURIComponent(nombre)}`);
  }

  getDetallesPorPedido(idpedido: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrlDe}/pedido/${idpedido}`);
  }
}
