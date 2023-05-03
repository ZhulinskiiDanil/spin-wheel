const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
function randomRgbColor() {
  const min = 100, max = 180
  return `rgb(${random(min, max)}, ${random(min, max)}, ${random(min, max)})`
}

function createItem(item, index) {
  const bgColor = randomRgbColor()
  const deg = 360 / items?.length * index
  const element = document.createElement("div")
  const innerElement = document.createElement("div")

  innerElement.classList.add("list__item__content")
  innerElement.innerHTML = item.content

  element.appendChild(innerElement)
  element.classList.add("list__item")
  element.style.transform = `translate3d(-50%, -50%, 0) rotate(${deg}deg)`
  element.setAttribute("style", element.getAttribute("style") + ` --color: ${bgColor}`)

  return element
}

function addItemToList(item) {
  const list = document.querySelector(".list")
  list.appendChild(item)
}

function clearList() {
  document.querySelector(".list").innerHTML = ""
}

function initList(items) {
  const list = document.querySelector(".list")
  list.setAttribute("style", `--count: ${items?.length}`)

  clearList()
  items.forEach((item, index) => {
    const element = createItem(item, index)
    addItemToList(element)
  })
}