const items = [
  { content: "1", price: 100 },
  { content: "2", price: 200 },
  { content: "3", price: 300 },
  { content: "4", price: 400 },
  { content: "5", price: 500 },
  { content: "6", price: 600 },
  { content: "7", price: 700 }
]

const session = {
  ALL_ITEMS: [],
  LAST_ITEM: false
}

const settings = {
  DELAY: 3000,
  SPINS: 10
}

initList(getRandomItems("__INIT__"))
function getRandomItems(type) {
  const randomItems = Array(items?.length).fill(null).map(() => {
    const randomIndex = Math.floor(Math.random() * items?.length)
    return items[randomIndex]
  })

  if (type !== "__INIT__") {
    session.LAST_ITEM = randomItems[0]
    session.ALL_ITEMS.push(randomItems[0])
  }

  return randomItems
}

function onWheelEnd() {
  const item = session.LAST_ITEM
}

function start() {
  initList(getRandomItems())
  runAnimation(onWheelEnd)
}

document.addEventListener("click", start)