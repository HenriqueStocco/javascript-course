// AJAX -> Asynchronous JavaScript and XML
// AJAX -> JavaScript Assincrono e Linguagem de Marcaçao Extensivel
// XML -> Extensible Markup Language
// XML -> Linguagem de Marcaçao Extensivel
// Requisiçoes Assincrona + Promises
// Objetivo e carregar paginas sem dar fullreload(carregar e recarregar a pagina inteira)basic/template

// Essa funçao faz requisicao de qualquer tipo de dado
// XMLHttpRequest
// novamente, new chama o construtor da funcao
const request = obj => {
    const xhr = new XMLHttpRequest();
    // xhr.open(HTTPMethod, URL, se for asynchrono coloca -> true, se nao -> false)
    // open usa para requests
    // se for fazer um POST, usa xhr.send();
    xhr.open(obj.method, obj.url, true);
    xhr.send(null);

    // Esse evento 
    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);       
        } else {
            obj.error({
                code : xhr.status,
                msg: xhr.statusText
            });
        }
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

function carregaPagina(el) {
    const href = el.getAttribute('href');
    
    const objConfig = {
        method: 'GET',
        url: href,
        success(response) {
            carregaResultado(response);
        },
        error(errorText) {
            console.log(errorText);
        }
    };

    request(objConfig);
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

// TODO ESSE CODIGO E A FORMA ANTIGA DE FAZER XMLREQUESTS, com callbacks e nao promises