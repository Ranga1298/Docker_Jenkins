const express = require('express')
const app = express()
const port = 3000

app.get('/helloworld', (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`ranga app listening on port ${port}`)
})
