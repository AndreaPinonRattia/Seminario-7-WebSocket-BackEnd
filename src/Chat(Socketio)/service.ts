import { Server } from 'socket.io';
import { IChat } from './model'; // Asegúrate de que la ruta sea correcta para importar la interfaz
import Chat from './schema'; // Importa el modelo para poder guardar en la base de datos

const connectedUser = new Set();

const socketService = (io: Server) => {
    io.on('connection', (socket) => {
        console.log('Connected successfully', socket.id);
        socket.join("some room");
        connectedUser.add(socket.id);
        io.to("some room").emit('connected-user', connectedUser.size);

        socket.on('disconnect', () => {
            console.log('Disconnected successfully', socket.id);
            connectedUser.delete(socket.id);
            io.to("some room").emit('connected-user', connectedUser.size);
        });

        socket.on('manual-disconnect', () => {
            console.log('Manual disconnect requested', socket.id);
            socket.disconnect();
        });

        // Manejar el evento 'sendMessage'
        socket.on('sendMessage', async (data) => {
          const { user, message } = data;
      
          // Crear un nuevo mensaje como objeto IChat
          const newMessage: IChat = new Chat({
              user: user,
              message: message,
              date: new Date() // Generar la fecha actual
          });
      
          try {
              // Guardar el mensaje en la base de datos
              await newMessage.save();
      
              // Emitir el mensaje a todos los usuarios de la sala en formato JSON
              io.to("some room").emit('message-receive', {
                  user: newMessage.user,
                  message: newMessage.message,
                  date: newMessage.date // Asegúrate de enviar la fecha
              });
          } catch (error) {
              console.error('Error al guardar el mensaje:', error);
          }
      });
      
    });
};

export default socketService;
