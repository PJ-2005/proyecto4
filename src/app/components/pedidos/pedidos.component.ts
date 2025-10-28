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
  detalles: any[] = [];
  pedidoSeleccionado: number | null = null;
  mostrarModal: boolean = false;

  constructor(private libreriaService: LibreriaService) {}

  buscarPedidosPorCliente() {
    if (this.nombreCliente.trim() === '') {
      this.pedidos = [];
      return;
    }

    this.libreriaService.getPedidosPorCliente(this.nombreCliente).subscribe({
      next: (data: any[]) => {
        this.pedidos = data;
      },
      error: (err: any) => {
        console.error('Error al obtener pedidos:', err);
        this.pedidos = [];
      }
    });
  }

  verDetalles(idpedido: number) {
    this.pedidoSeleccionado = idpedido;
    this.libreriaService.getDetallesPorPedido(idpedido).subscribe({
      next: (data: any[]) => {
        this.detalles = data;
        this.mostrarModal = true;
      },
      error: (err: any) => {
        console.error('Error al obtener detalles:', err);
        this.detalles = [];
      }
    });
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.detalles = [];
  }
}
