// Melhor forma de carregar html, e utilizando promises em vez de callbacks
// E em vez de usar .then().catch()
// usamos funçoes async await

const request = obj => {
    return new Promise((resolve, reject) => {
        // Objeto xhr e o que faz as requisicoes, e precisa receber o metodo http, a url e se vai ser request assincrono ou nao
        const xhr = new XMLHttpRequest();
        // open vai fazer a requisicao
        xhr.open(obj.method, obj.url, true);
        // send e para quando vou fazer POST
        xhr.send(null);

        // Assim que carregar a pagina esse evento e chamado e com as condiçoes abaixo ira mostrar se a pagina esta OK(200 - 299) ou se ocorreu alguma coisa (> 300)
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                // resolve a promise mostrando o status code de OK
                resolve(xhr.responseText);
            } else {
                // Rejeita a promise mostrando o status code como erro
                reject(xhr.statusText);
            }
        });
    });
};

document.addEventListener('click', e => {
    // Verifica se e um link(url)
    const el = e.target;
    // garantindo que o nome do elemento seja aquela tag e convertendo ela para letras minusculas
    const tag = el.tagName.toLowerCase();

    // verifica se a tag e um <a>
    if(tag === 'a') {

        // Previne que ele va para a pagina do link dele
        // No caso nao queremos mudar de pagina.
        e.preventDefault();
        carregaPagina(el);
    }
});

// Funçao recebera o elemento e vai carregar a pagina
async function carregaPagina(el) {
    // Pega o valor da tag a do atributo href
    const href = el.getAttribute('href');

    // Envia os parametros para a funcao request
    // O metodo http e o link
    const objConfig = {
        method: 'GET',
        url: href,
    };
    // Tenta fazer request e receber 200 OK
    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(e) {
        // Mostrando o erro caso o status code nao seja 200 - 299
        console.log(e);
    }
    // Utilzando a promise
    // .then(response => {
    //     carregaResultado(response); 
    // })
    // .catch(e => {
    //     console.log(e);
    // });
}

// Funçao que ira Mostrar os conteudos das paginas na pagina principal
function carregaResultado(response) {
    // armazenando o conteudo do atributo resultado da tag <a>
    const resultado = document.querySelector('.resultado');
    // Inserindo no html o conteudo de cada pagina quando clicado
    resultado.innerHTML = response;
}

/*
GOOD NEWS: Entendi como XMLResquest funciona, como carregar paginas HTML e utilizar funçoes assincronas e promises

BAD NEWS: Normalmente nao se cria tudo isso, apenas utilizamos Axios que e baseado nisso tudo e mais facil e simples de fazer
*/