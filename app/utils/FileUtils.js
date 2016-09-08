function basename(path) {
  var base = new String(path).substring(path.lastIndexOf('/') + 1)

  if (base.lastIndexOf() != -1) {
    base = base.substring(0, base.lastIndexOf('.'))
  }

  return base
}

export { basename }
