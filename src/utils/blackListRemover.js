/*
* Written by Erik Genaro Rodriguez Lazcano <erik.genaro@gmail.com>, Augut 2019
* Given a list of items and a blacklist (if there is one item inside it) 
* check if in those items(given list) actually exists an item
* named equal as one blacklisted items
*/

/* eslint no-param-reassign: ["error", { "props": false }] */
const blackListRemover = (list, blackList = []) => {
  Object.keys(list).forEach(key => {
    if (blackList.indexOf(key) >= 0) {
      delete list[key]
    } else {
      list[key] = JSON.stringify(list[key])
    }
  })
}

module.exports = blackListRemover;