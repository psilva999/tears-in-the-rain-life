export function years() {
  const myYear = new Date(),
        ul = document.querySelector("ul")

  let year = myYear.getFullYear()

  for (let tear = 2000; tear < 2067; tear++) {
    if (tear < year) 
      ul.innerHTML += `<li class='filled'></li>`

    else if (tear === year)
      ul.innerHTML += `<li class='filled myTime'></li>`

    else 
      ul.innerHTML += `<li class='empty'></li>`
  }
}
