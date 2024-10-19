import { usersofDB } from './schema'
//import userData from './users.json'

export const getEntries = {
    getAll: async()=>{
    return await usersofDB.find();
    },
    findById: async(id:string)=>{
        return await usersofDB.findById(id);
    },
    create: async(entry:object)=>{
        return await usersofDB.create(entry);
    },
    update: async(id:string,body:object)=>{
        console.log(body);
        return await usersofDB.findByIdAndUpdate(id,body,{$new:true});
    },
    delete: async(id:string)=>{
        return await usersofDB.findByIdAndDelete(id);
    },
    addExperince: async(idUser:string,idExp:string)=>{
        return await usersofDB.findByIdAndUpdate(idUser,{$addToSet:{experience:idExp}});
    },
    delExperience: async(idUser:string,idExp:string)=>{
        return await usersofDB.findByIdAndUpdate(idUser,{$pull:{experience:idExp}});
    }
}