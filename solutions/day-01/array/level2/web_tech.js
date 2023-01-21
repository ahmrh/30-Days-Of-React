let text =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let puncless = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")

export let webTechs = puncless.split(" ")


