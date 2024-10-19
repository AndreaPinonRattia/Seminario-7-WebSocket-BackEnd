import { model, Schema } from "mongoose";
import { experienciasInterface } from './model'

export const experienciasSchema = new Schema<experienciasInterface>({
    owner: {type: Schema.Types.ObjectId, ref:'user'},
    participants: [{type: Schema.Types.ObjectId, ref:'user'}],
    description: String
})

export const experienciasofDB = model<experienciasInterface>('experiencias',experienciasSchema)