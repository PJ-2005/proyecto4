import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {
  private apiUrl = 'http://localhost:9898/api';

  constructor(private http: HttpClient) {}

  // Buscar pedidos por nombre de cliente
  buscarPedidosPorCliente(nombre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ca_pedido/cliente/${nombre}`);
  }

  // Obtener el detalle del pedido por ID
  obtenerDetallePedido(idPedido: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/de_pedido/pedido/${idPedido}`);
  }
}
