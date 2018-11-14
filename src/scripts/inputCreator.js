const inputCreator = {
  elementFactory(el, cont, clazz, id, type, value, placeholder) {
    let element = document.createElement(el)
    $(element).html(cont || null)
    $(element).addClass(clazz || null)
    element.setAttribute("id", id || null)
    element.setAttribute("type", type || null)
    element.setAttribute("value", value || null)
    element.setAttribute("placeholder", placeholder || null)
    // returns our created elements when called
    return element
  }
}