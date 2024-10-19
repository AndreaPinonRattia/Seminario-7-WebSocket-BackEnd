import { ObjectId } from "mongoose"


export interface usersInterface{
    id: number,
    name: string,
    mail: string,
    password: string,
    comment: string,
    experience: ObjectId[]
}
export type UsersInterfacePublicInfo = Pick<usersInterface, 'id' | 'name' | 'comment'>
export type newUserInfo = Omit<usersInterface,'id'>