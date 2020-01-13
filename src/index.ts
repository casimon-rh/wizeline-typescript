import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import * as fs from 'fs'
import soap from 'soap'

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.all('*', (req: Request, res: Response): Response => {
//   console.log('Not Found')
//   return res.sendStatus(404)
// })

const serv = {
  Serv: {
    PortType: {
      Func: (a: string) => ({p: a})
    }
  }
}

const xml = fs.readFileSync('../file.wsdl', 'utf-8')
app.listen(app.get('port'), () => {
  soap.listen(app, '/app', serv, xml, () => {
    console.log('App running')
  })
})

export default app