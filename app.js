import express from 'express'
import path from 'path'
import { generateUploadURL } from './s3.js'
const app = express()
const port = 3000

//use the front folder for html: non-react version
app.use(express.static('front'))
app.get('/', async (req, res) => {
  res.sendFile(__dirname+"../front/index.html");
})

//production testing of react front-end
if (process.env.NODE_ENV === "production"){
  app.use(express.static('build'))
  app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

//request frontend to s3 upload url 
app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL()
  res.send({url})
})

//log listening info
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})
