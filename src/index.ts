import 'reflect-metadata'
import {createKoaServer} from 'routing-controllers'
import EmailController from './EmailController'

const port = process.env.PORT || 4000


const app = createKoaServer({
  cors: true ,
  controllers: [ EmailController ]
})

app.listen(port)

