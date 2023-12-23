// Evento de click nos links da pagina principal
document.addEventListener('click', e => {
    const elemento = e.target;
    const tag = elemento.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(elemento);
    }
});

// Maneira mais clean de usar async await function e fetch api
async function carregaPagina(elemento) {
    try {
        // Vai pegar o atributo da tag <a> que e um link
        const href = elemento.getAttribute('href');
        // Vai carregar a pagina do link
        const response = await fetch(href);

        // Vai tratar, se o status for diferente de OK ele vai apresentar o erro
        if(response.status !== 200){
            throw new Error(`ERROR: ${response.status}`);
        }

        // Se o status for OK vai esperar a resposta e retornar uma promise que vai converter a resposta em texto
        const html = await response.text();
        // E enfim vai mostrar o conteudo da pagina na pagina principal
        carregaResultado(html);
    } catch(e) {
        // Se der algum erro, vai mostrar o erro no console
        console.error(e);
    }
}
// HARDCODED com fetch API
//     // fetch carrega o link
//     fetch(href)
//         // pega a resposta e retornando outra promise que vai converter a promise em texto
//         .then(async response => {
//             if(response.status !== 200){
//                 throw new Error(`ERROR: ${response.status}`);
//             }
//             return response;
//         })
//         .then(html => {
//             carregaResultado(html);
//         })
//         .catch(e => console.error(e));
// }

// Carrega o resultado na pagina html principal
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}