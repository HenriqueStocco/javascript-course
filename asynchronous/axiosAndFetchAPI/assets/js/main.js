// Com fetch API -> Carregar um JSON na pagina HTML
// fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => carregaElementos(json));

// Com Axios -> Carregar um JSON na pagina HTML
// Se, utilizar o node e sim uma tag <script> no html
// Como o axios nao retorna uma promise para poder carregar o elemento na pagina html, usamos a funcao direto na primeira promise
// Axios utiliza como base o XMLHttpRequest(xhr no console)
axios('pessoas.json')
    .then(response => carregaElementos(response.data));

function carregaElementos(json) {
    const tabela = document.createElement('table');

    for(let pessoa of json) {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);


        // td = document.createElement('td');
        // td.innerHTML = pessoa.salario;
        // tr.appendChild(td);

        tabela.appendChild(tr);
    }
    const resultado = document.querySelector('.resultados');
    resultado.appendChild(tabela);
}