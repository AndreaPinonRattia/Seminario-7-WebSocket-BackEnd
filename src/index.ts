import express from 'express'
import cors from 'cors'
import userRouter from './routes/user'
import experienciasRouter from './routes/experiencias'
import { run } from './database/mongo_conn'
import initializeSocket from './routes/chat';

const app = express()
app.use(express.json())
run();

app.use(cors());


const PORT = 3000;

app.get('/ping', (_req , res) => {
    console.log('ping recibido correctamente')
    res.send('pinged')
})

app.use('/user',userRouter)
app.use('/experiencias',experienciasRouter)

const server = app.listen(PORT, () => {
    console.log('el servidor esta escuchando en el puerto '+ PORT)
})

initializeSocket(server);



