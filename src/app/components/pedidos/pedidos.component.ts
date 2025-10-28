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
    if (!this.nombreCliente.trim()) {
      alert('Ingrese un nombre de cliente');
      return;
    }

    console.log('Buscando pedidos para:', this.nombreCliente);
    this.libreriaService.buscarPedidosPorCliente(this.nombreCliente).subscribe({
      next: (data) => {
        console.log('Pedidos obtenidos:', data);
        this.pedidos = data;
        if (data.length === 0) alert('No se encontraron pedidos para ese cliente');
      },
      error: (err) => {
        console.error('Error al buscar pedidos:', err);
        alert('Error al buscar pedidos en el servidor');
      }
    });
  }

  abrirModal(idPedido: number) {
    console.log('Obteniendo detalle de pedido:', idPedido);
    this.libreriaService.obtenerDetallePedido(idPedido).subscribe({
      next: (data) => {
        console.log('Detalle obtenido:', data);
        this.detallePedido = data;
        this.mostrarModal = true;
      },
      error: (err) => {
        console.error('Error al obtener detalle del pedido:', err);
        alert('Error al obtener el detalle del pedido');
      }
    });
  }

  cerrarModal() {
    this.mostrarModal = false;
  }
}
