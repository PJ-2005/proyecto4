import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibreriaService } from '../../services/libreria.service';

@Component({
  selector: 'app-pedidos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {

  nombreCliente: string = '';
  pedidos: any[] = [];
  detallePedido: any[] = [];
  mostrarModal: boolean = false;

  constructor(private libreriaService: LibreriaService) {}

  buscarPedidos() {
    if (!this.nombreCliente.trim()) return;

    this.libreriaService.buscarPedidosPorCliente(this.nombreCliente).subscribe({
      next: (data) => {
        this.pedidos = data;
        if (data.length === 0) alert('No se encontraron pedidos para ese cliente');
      },
      error: (err: any) => {
        console.error(err);
        alert('Error al buscar pedidos');
      }
    });
  }

  abrirModal(idPedido: number) {
    this.libreriaService.obtenerDetallePedido(idPedido).subscribe({
      next: (data) => {
        this.detallePedido = data;
        this.mostrarModal = true;
      },
      error: (err: any) => {
        console.error(err);
        alert('Error al obtener detalle del pedido');
      }
    });
  }

  cerrarModal() {
    this.mostrarModal = false;
  }
}
