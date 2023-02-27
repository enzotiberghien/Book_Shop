const $ = (element, root = document) => {
  return root.querySelector(element)
}

const $all = (element, root = document) => {
  return root.querySelectorAll(element)
}

export { $, $all }