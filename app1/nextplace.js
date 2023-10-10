const express = require('express')
const app = express()
const port = 3000

app.get('/newplace', (req, res) => {
  res.send("Hii There")
})

app.listen(port, () => {
  console.log(`ranga app listening on port ${port}`)
})
