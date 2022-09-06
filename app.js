import express from 'express'
import { generateUploadURL } from './s3.js'
const app = express()
const port = 3000

//use the front folder for html
app.use(express.static('front'))

app.get('/', async (req, res) => {
  res.sendFile(__dirname+"../front/index.html");
})

app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL()
  res.send({url})
})

//log listening info
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
