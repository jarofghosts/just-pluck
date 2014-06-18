just-pluck
====

[![Build Status](http://img.shields.io/travis/jarofghosts/just-pluck.svg?style=flat)](https://travis-ci.org/jarofghosts/just-pluck)
[![npm install](http://img.shields.io/npm/dm/just-pluck.svg?style=flat)](https://www.npmjs.org/package/just-pluck)

simple pluck function

## why

there are a lot of implementations out there that either don't support deep
lookup or try to do too much wacky stuff or have a lot of dependencies for no
good reason.

## usage

```js
var pluck = require('just-pluck')

var pokemon = [{name: 'pikachu'}, {name: 'meowth'}, {name: 'mr mime'}]

console.log(pluck('name', pokemon)) // ['pikachu', 'meowth', 'mr mime']
```

## notes

if nothing is pluck-able from the item in your array, it will be `undefined` in
the result.

## license

MIT
