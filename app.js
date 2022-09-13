import express from 'express'
import path from 'path'
import { generateUploadURL } from './s3.js'
const app = express()
const port = 8080

//use the front folder for html: non-react version
app.use(express.static('front'))
// app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get('/', async (req, res) => {
  res.sendFile(__dirname + "index.html");
})

//production testing of react front-end
if (process.env.NODE_ENV === "production"){
  app.use(express.static('build'))
  app.get('*', (req, res) => {
    req.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

//controlboard
// app.get('/control', async (req, res) => {
//   res.sendFile("./server/front/control.html");
// })

//request frontend to s3 upload url 
app.get('/s3Url', async (req, res) => {
  console.log(req.query);
  const { keyName } = req.query;
  // const keyName = req.query.keyName;
  const url = await generateUploadURL(keyName);
  res.send({url})
})

//log listening info
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})
