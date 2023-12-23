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

        // Assim que carregar a pagina
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
    };
    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(e) {
        console.log(e);
    }
    // .then(response => {
    //     carregaResultado(response); 
    // })
    // .catch(e => {
    //     console.log(e);
    // });
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

/*
GOOD NEWS: Entendi como XMLResquest funciona, como carregar paginas HTML e utilizar funçoes assincronas e promises

BAD NEWS: Normalmente nao se cria tudo isso, apenas utilizamos Axios que e baseado nisso tudo e mais facil e simples de fazer
*/