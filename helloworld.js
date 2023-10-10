const express = require('express')
const app = express()
const port = 3000

app.get('/helloworld', (req, res) => {
  res.send("This is praneeth's World!")
})

app.listen(port, () => {
  console.log(`praneeth app listening on port ${port}`)
})
