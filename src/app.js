const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const crossOrigin = require("cross-origin")

const route = require("./router/router.js")

const app = express()

app
  .set("port", 3003)

app
  .get("/", (req, res) => {
    res
      .send("Hi, This is my API REST FULL")
      .end()
  })

app
  .use(bodyParser.json())
  .use(morgan("dev"))
  .use(crossOrigin)
  .use(route)

module.exports = app
