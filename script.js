function toogleMode() {
const html = document.documentElement
html.classList.toggle('light')


// pegar a tag img (para fazer a troca do avatar conforme o modo light ou dark)
const img = document.querySelector("#profile img")

// Substitur=ir a imagem
if(html.classList.contains('light')) {
  img.setAttribute('src','./assets/avatar-light.png')
} else {
  img.setAttribute('src', './assets/avatar.png')
}

}
