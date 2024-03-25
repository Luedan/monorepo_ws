import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { QueueService } from './queue.service';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true, namespace: 'queue' })
export class QueueGateway {
  private queue: { name: string; state: number }[] = [];

  @WebSocketServer() server: Server;
  constructor(private readonly queueService: QueueService) {}

  @SubscribeMessage('add-to-queue')
  addToQueue(client: Socket, payload: { name: string }) {
    this.queue.push({ name: payload.name, state: 1 });
    this.server.emit('queue', this.queue);
  }

  @SubscribeMessage('get-queue')
  getQueue() {
    this.server.emit('queue', this.queue);
  }

  @SubscribeMessage('remove-from-queue')
  removeFromQueue(client: Socket, payload: { name: string }) {
    this.queue = this.queue.filter((name) => name.name !== payload.name);
    this.server.emit('queue', this.queue);
  }
}
