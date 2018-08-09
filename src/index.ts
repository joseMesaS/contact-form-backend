import 'reflect-metadata'
import {createKoaServer} from 'routing-controllers'
import EmailController from './EmailController'



const app = createKoaServer({
  cors: true ,
  controllers: [ EmailController ]
})

app.listen(4001)

