var test = require('tape')

var pluck = require('../')

test('plucks values at specified key', function(t) {
  t.plan(1)

  var arr = [{id: 1}, {id: 2}, {id: 3}]
    , expected = [1, 2, 3]

  t.deepEqual(pluck('id', arr), expected)
})

test('returns array if nothing pluckable', function(t) {
  t.plan(1)

  var expected = [undefined, undefined, undefined]
    , arr = [{id: 1}, {id: 2}, {id: 3}]

  t.deepEqual(pluck('goat', arr), expected)
})
