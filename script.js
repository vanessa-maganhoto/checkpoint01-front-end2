const tituloForm = document.querySelector('#titulo-form')
const descricaoTextArea = document.querySelector('#descricao')
const linkImagem = document.querySelector('#link-imagem')
const botao = document.querySelector('#botao')
const regiao = document.getElementsByName('regiao')
const visitacao = document.getElementById('visitacao')

botao.addEventListener('click', criarCard)

function criarCard(e) {
    e.preventDefault()

    const h3 = document.createElement('h3')
    h3.innerText = tituloForm.value
    document.querySelector('div.card').appendChild(h3)

    const pDescricaoTextArea = document.createElement('p')
    pDescricaoTextArea.innerText = descricaoTextArea.value
    document.querySelector('div.card').appendChild(pDescricaoTextArea)

    const img = document.createElement('img')
    img.setAttribute('src', linkImagem.value)
    document.querySelector('div.imagem').appendChild(img)

    let regiaoMarcada
    for (reg of regiao){
        if (reg.checked){
            regiaoMarcada = reg.value;
        }
    }

    const pRegiaoMarcada = document.createElement('p')
    pRegiaoMarcada.innerText = `O ponto turístico ${tituloForm.value} está localizado na região ${regiaoMarcada}`
    document.querySelector('div.card').appendChild(pRegiaoMarcada)
    
    const pVisitacao = document.createElement('p')
    pVisitacao.innerText = (visitacao.checked == true) 
    ? `Você já conhece ${tituloForm.value}` 
    : `Você ainda não visitou ${tituloForm.value}`
    document.querySelector('div.card').appendChild(pVisitacao)

}