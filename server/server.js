import express from 'express'
import cors from 'cors'
import riskperDb from '../db/db.js'
import router from '../route/riskRoute.js'
import { configDotenv } from 'dotenv'
import path from 'path'
configDotenv()
const port = process.env.Port || 8000

const __dirname = path.resolve()
const app = express()
app.use(express.static(path.join(__dirname, '/fe/dist')))
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'fe','dist','index.html'))
})
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.use('/api', router)

riskperDb()
app.listen(port, ()=>{
  console.log(`app is listening on ${port}`)
})