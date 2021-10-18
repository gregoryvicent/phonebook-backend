const ManageFS = require("../lib/ManageFS")

const manageFs = new ManageFS()

let isSame = false

function postMethod(res, data, req) {
  data.forEach((element) => {
    if(element.id === req.body.id){
      isSame = true
    }
  })

  if(isSame) {
    res
      .status(200)
      .json({
        "status": "200",
        "message": "Item Replay"
      })
      .end()
  } else{
    data.push(req.body)
    let json = JSON.stringify(data)
    manageFs.writeFS(json)

    res
      .status(200)
      .json({
        "status": "200",
        "message": "Added new item"
      })
      .end()
  }
}

module.exports = postMethod
