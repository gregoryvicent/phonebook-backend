const route = require("express").Router()

const data = require("../data.json")

const getMethodAll = require("./getMethodAll")
const getMethodOnce = require("./getMethodOnce")
const postMethod = require("./postMethod")
const putMethod = require("./putMethod")
const deleteMethod = require("./deleteMethod")

route
  .get( "/api", (req, res) => getMethodAll(res, data) )
  .get( "/api/:id", (req, res) => getMethodOnce(res, data, req) )
  .post( "/api", (req, res) => postMethod(res, data, req) )
  .put( "/api/:id", (req, res) => putMethod(res, data, req) )
  .delete( "/api/:id", (req, res) => deleteMethod(res, data, req) )

module.exports = route
