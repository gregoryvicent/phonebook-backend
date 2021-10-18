const fs = require("fs")

class ManageFS {
  url = __dirname.replace("lib", "data.json")

  writeFS(data) {
    fs.writeFileSync(this.url, data)
  }
}

module.exports = ManageFS
