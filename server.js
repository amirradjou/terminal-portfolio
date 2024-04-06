const express = require('express')
const path = require('path');
const app = express()
const port = 3001


app.use('/assets', express.static('dist/assets'))

app.get('/CV.pdf', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/CV.pdf'));
});

app.get('/', (req, res) => {
  console.log("hello")
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.get

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
