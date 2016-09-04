class Row {
  constructor(path, helper) {
    this.path = path
    this.helper = helper
  }

  // TODO: sync
  lock (user) {
    return new Promise((resolve, reject) => {
      helper.fetch_by_path(this.path)
        .then(row => {
          if (row === undefined) {
            reject("Not found lock object.")
            return 
          }

          if (row.owner != null) {
            reject("Owner already exist.")
            return
          }

          this.owner = user
          helper
            .create_or_update_rows([this])
            .then(row => resolve(this))
            .catch(err => reject(err))
        })
    })
  }

  // TODO: sync
  unlock (user) {
    var row = helper.fetch_by_path(this.path)
    if (row === undefined) {
      return false
    }

    if (row.owner != user) {
      return false
    }

    this.owner = null
    helper.create_or_update_rows([this])
    return true
  }

  delete () {
    helper.delete_by_path(this.path)
  }

  static touches(helper, pathes) {
    helper.create_or_update_rows(pathes)
  }

  static list(helper) {
    helper.search()
  }
}

export default Row
