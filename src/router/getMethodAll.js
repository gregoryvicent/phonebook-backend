function getMethodAll(res, data) {
  res 
    .status(200)
    .json(data)
    .end()
}

module.exports = getMethodAll
