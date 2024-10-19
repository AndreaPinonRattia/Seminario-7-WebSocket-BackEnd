import { ObjectId } from "mongoose";

export interface experienciasInterface{
    owner: ObjectId,
    participants: ObjectId[],
    description: string
}