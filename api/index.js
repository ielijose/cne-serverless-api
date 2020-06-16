const express = require("express")
const CNEService = require("./services/cne")
const app = express()

app.get("/", (req, res) => {
  res.send({ message: "CNE API" })
})

app.get("/:nac/:ci", async (req, res) => {
  const { nac, ci } = req.params
  const data = await CNEService.query(nac, ci)
  res.send(data)
})

module.exports = app
