/*Exemplo 01*/

function exibir() {
    alert("Manipulação direta do evento!") //quando clicar no botão a função é ativada
}

/*Exemplo 02 */
function exibir_anonima() {
    let botao = document.getElementById("btn1")
    botao.addEventListener("click", function () { alert("A função anônima é uma função sem nome, ex: function(){...}. Pode ser chamada de função anônima, callback, Funcão de Evento (Event Handler)") }) //função como parâmetro - função anônima/ callback
}

/*As funções devem ser chamadas para ativar o listener assim que a página carregar */
exibir_anonima();

/*Chamando a função exibir a partir do click */
function exibir_nominada() {
    let botao = document.getElementById("btn2")
    botao.addEventListener("click", exibir)
}
exibir_nominada();

function exibir_flecha() {
    let botao = document.getElementById("btn3")
    botao.addEventListener("click", () => { alert("A função arrow é dada por ( )=> {...}") })
}
exibir_flecha();

/*Exemplo 03 - Ativando o evento com a passagem do mouse */
function mudar_cor() {
    var mouse = document.getElementById("mouse")
    mouse.addEventListener("mouseover", function () {
        mouse.style.color = "blue"
        mouse.innerText = "Passe o mouse aqui!"
    })
    mouse.addEventListener("mouseout", function () {
        mouse.style.color = "red"
        mouse.innerText = "Evento com o mouse"
    })
}
mudar_cor();