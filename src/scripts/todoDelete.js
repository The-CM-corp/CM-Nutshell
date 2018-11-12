

function onCheckbox() {
  let checkbox = document.querySelectorAll('input[type =checkbox]')
  if (checkbox.length >= 2) {
    checkbox.forEach(box => {
      box.addEventListener("change", () =>{
        console.log("checked in js")
        console.log(box)
      })
    })
  }else checkbox.addEventListener("change", () => {
    console.log("just one event")
  // })
  // $('input[type =checkbox]').change(() => {
  //   console.log("JQUERY HELP ME")
  //   console.log($('input[type =checkbox]').siblings(".todo__checkbox").toggle("todo__checked")) 
    // $("todo__checkbox").toggle("todo__checked")
  })
}

export default onCheckbox