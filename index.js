var lookup = require('dotpather')

module.exports = pluck

function pluck(key, arr) {
  var resolve = lookup(key)
    , result = []

  arr = [].slice.call(arr)

  for(var i = 0, l = arr.length; i < l; ++i) {
    result.push(resolve(arr[i]))
  }

  return result
}
