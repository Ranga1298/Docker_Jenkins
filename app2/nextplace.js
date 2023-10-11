const express = require('express')
const app = express()
const port = 3000

app.get('/nicejob', (req, res) => {
  res.send("This is ranga's new place!")
})

app.listen(port, () => {
  console.log(`ranga app listening on port ${port}`)
})
