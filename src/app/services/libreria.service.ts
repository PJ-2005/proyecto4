import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {

  private baseUrl = 'http://localhost:9898/api';

  constructor(private http: HttpClient) {}

  buscarPedidosPorCliente(nombre: string): Observable<any[]> {
    const encodedName = encodeURIComponent(nombre.trim());
    return this.http.get<any[]>(`${this.baseUrl}/ca_pedido/cliente/${encodedName}`);
  }

  obtenerDetallePedido(idPedido: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/de_pedido/pedido/${idPedido}`);
  }
}
