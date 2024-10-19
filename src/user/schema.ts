import {model, Schema } from "mongoose";
import { usersInterface } from './model'

export const usersSchema = new Schema<usersInterface>({
    id: Number,
    name: String,
    mail: String,
    experience: [{type: Schema.Types.ObjectId,required: false, ref:'experience'}],
    password: String,
    comment: String
})

export const usersofDB = model<usersInterface>('user',usersSchema)