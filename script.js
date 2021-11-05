let tituloForm = document.querySelector('#titulo-form')
let descricaoTextArea = document.querySelector('#descricao')
let linkImagem = document.querySelector('#link-imagem')
let botao = document.querySelector('#botao')

botao.addEventListener('click', criarCard)

function criarCard(e){
    e.preventDefault()

    let h3 = document.createElement('h3')
    h3.innerText = tituloForm.value 
    document.querySelector('div').appendChild(h3)

    let p = document.createElement('p')
    p.innerText = descricaoTextArea.value
    document.querySelector('div').appendChild(p)

    let img = document.createElement('img')
    img.setAttribute('src', linkImagem.value)
    document.querySelector('div').appendChild(img)

}