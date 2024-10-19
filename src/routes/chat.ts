import { Server } from 'socket.io';
import socketService from '../Chat(Socketio)/service';

const initializeSocket = (server: any) => {
    const io = new Server(server,  {
        cors: {
          origin: "*"
        }});
  socketService(io);
};

export default initializeSocket;