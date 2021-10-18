function getMethodOnce(res, data, req) {
  let id = req.params.id
  let isSame = false

  data.forEach((element) => {
    if(element.id === id) {
      isSame = true
    }
  })
  if(isSame) {
    res
      .status(200)
      .json(data[id])
      .end()
  } else {
    res
      .status(404)
      .json({
        "status": "404",
        "message": "Item not found"
      })
      .end()
  }
}

module.exports = getMethodOnce
