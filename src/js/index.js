const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroTaAtivo = body.classList.contains("modo-escuro")
    if (modoEscuroTaAtivo) {
        body.classList.remove("modo-escuro");
        imagemBotaoTrocaTema.setAttribute("src","/src/imagens/sun.png")
    } else{
        body.classList.add("modo-escuro");
        imagemBotaoTrocaTema.setAttribute("src", "/src/imagens/moon.png")
    }
    

})
