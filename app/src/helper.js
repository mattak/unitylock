var fs = require('fs')

// { path: { path:"", owner:"", updated_at: 0 } }
// TODO: synchronize
// TODO: mysql support
class Helper {
  constructor(file) {
    this.file = file
  }

  raw() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.file, (err, text) => {
        if (err) {
          // reject(err)
          resolve({})
          return
        }
        resolve(JSON.parse(text))
      })
    })
  }

  search() {
    return this.raw()
      .then(hash => {
        return hash.values || []
      })
  }

  fetch_by_path(path) {
    return this.raw()
      .then(hash => {
        return hash[path]
      })
  }

  update_user_by_row(row) {
    this.row()
      .then(hash => {
        let hashkeys = hash.keys || []
        hash[row.path]

      })
  }

  create_or_update_by_pathes(pathes) {
    return new Promise((resolve, reject) => {
      this.raw()
        .then(hash => {
          let hashkeys = hash.keys || []
          pathes.forEach(path => {
            if (!hashkeys.includes(path)) {
              hash[path] = { path: path, updated_at: Date.now() }
            } else {
              hash[path]["updated_at"] = Date.now()
            }
          })
          return hash
        })
        .then(hash => {
          var writeData = JSON.stringify(hash)
          fs.writeFile(this.file, writeData, (err) => {
            if (err != null) { reject(err) }
            let hashvalues = (Object.keys(hash) || []).map(it => hash[it])
            let result     = hashvalues.filter(it => pathes.includes(it.path)) || []
            resolve(result)
          })
        })
    })
  }

  delete_by_path(path) {
    return raw()
      .then(hash => {
        delete hash[path]
        return hash
      })
      .then(hash => {
        fs.writeFile(this.file, JSON.stringify(hash))
      })
  }
}

export default Helper
