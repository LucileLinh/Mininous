// shuffle an array. This method transform origin:
const shuffle = function(array) {
  let i = array.length
  while (--i > 0) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[j]
    array[j] = array[i]
    array[i] = temp
  }
  return array
}

// get an array of random items from a given number and a library:
const getPairs = function(lib, num) {
  let cards = new Array(num)
  for (let i = 0; i < num; i += 2) {
    do {
      var x = Math.floor(Math.random() * lib.length)
    } while (cards.some(card => card.id === lib[x].id))
    cards[i] = cards[i + 1] = lib[x]
  }
  return cards
}

export { shuffle, getPairs }
