// function to create any elements (el) with any content (cont or null) and you can designate if it has a child
const elementCreator = {
  elementFactory(el, cont, clazz, id, link, type, value, ...children) {
    let element = document.createElement(el)
    $(element).html(cont || null)
    $(element).addClass(clazz || null)
    element.setAttribute("id", id || null)
    element.setAttribute("href", link || null)
    element.setAttribute("type", type || null)
    element.setAttribute("value", value || null)
    children.forEach(child => {
      element.appendChild(child)
    })
    // returns our created elements when called
    return element
  }
}


export default elementCreator