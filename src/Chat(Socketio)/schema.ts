import mongoose, { Schema } from "mongoose";
import { IChat } from './model'


const chatSchema: Schema = new Schema({
    user: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
  });
  
  const Chat = mongoose.model<IChat>('Chat', chatSchema);

  export default Chat; 