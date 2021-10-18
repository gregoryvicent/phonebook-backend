const ManageFS = require("../lib/ManageFS")

const manageFs = new ManageFS()

let isSame = false

function putMethod(res, data, req) {
  data.forEach((element, index) => {
    if(element.id === req.params.id) {
      isSame = true

      data.splice(index, 1, req.body)
      manageFs.writeFS(JSON.stringify(data))
    }
  }) 
    
  if(isSame) {
    res
      .status(200)
      .json({
        "status": "200",
        "message": "Item update"
      })
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

module.exports = putMethod
