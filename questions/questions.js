const quizData = [
    {
        level: 1, // Nível 1 (Fácil)
        questions: [
            {
                question: "O que significa HTML?",
                options: [
                    { text: "Hyper Text Markup Language", isCorrect: true },
                    { text: "Home Tool Markup Language", isCorrect: false },
                    { text: "Hyperlinks and Text Markup Language", isCorrect: false },
                    { text: "Hyper Text Module Language", isCorrect: false }
                ]
            },
            {
                question: "Qual é a tag HTML para inserir um link?",
                options: [
                    { text: "<a>", isCorrect: true },
                    { text: "<link>", isCorrect: false },
                    { text: "<href>", isCorrect: false },
                    { text: "<url>", isCorrect: false }
                ]
            },
            {
                question: "Como você define a cor de fundo em CSS?",
                options: [
                    { text: "background-color", isCorrect: true },
                    { text: "color", isCorrect: false },
                    { text: "bgcolor", isCorrect: false },
                    { text: "back-color", isCorrect: false }
                ]
            },
            {
                question: "Qual é a tag HTML correta para criar uma tabela?",
                options: [
                    { text: "<table>", isCorrect: true },
                    { text: "<tbl>", isCorrect: false },
                    { text: "<tab>", isCorrect: false },
                    { text: "<td>", isCorrect: false }
                ]
            },
            {
                question: "Em JavaScript, qual comando exibe uma mensagem de alerta?",
                options: [
                    { text: "alert()", isCorrect: true },
                    { text: "console.log()", isCorrect: false },
                    { text: "prompt()", isCorrect: false },
                    { text: "confirm()", isCorrect: false }
                ]
            },
            {
                question: "Qual tag HTML é usada para criar um botão?",
                options: [
                    { text: "<button>", isCorrect: true },
                    { text: "<input>", isCorrect: false },
                    { text: "<btn>", isCorrect: false },
                    { text: "<form>", isCorrect: false }
                ]
            },
            {
                question: "Qual propriedade CSS é usada para mudar a cor do texto?",
                options: [
                    { text: "color", isCorrect: true },
                    { text: "text-color", isCorrect: false },
                    { text: "font-color", isCorrect: false },
                    { text: "background-color", isCorrect: false }
                ]
            },
            {
                question: "Como você cria um comentário em HTML?",
                options: [
                    { text: "<!-- comentário -->", isCorrect: true },
                    { text: "// comentário", isCorrect: false },
                    { text: "/* comentário */", isCorrect: false },
                    { text: "** comentário **", isCorrect: false }
                ]
            },
            {
                question: "Qual é a tag HTML correta para um parágrafo?",
                options: [
                    { text: "<p>", isCorrect: true },
                    { text: "<para>", isCorrect: false },
                    { text: "<pg>", isCorrect: false },
                    { text: "<pr>", isCorrect: false }
                ]
            },
            {
                question: "Como você inclui um arquivo CSS externo em um documento HTML?",
                options: [
                    { text: "<link rel='stylesheet' href='style.css'>", isCorrect: true },
                    { text: "<stylesheet>style.css</stylesheet>", isCorrect: false },
                    { text: "<css src='style.css'>", isCorrect: false },
                    { text: "<style rel='style.css'>", isCorrect: false }
                ]
            },
            {
                question: "Qual é o atributo HTML para definir uma imagem?",
                options: [
                    { text: "src", isCorrect: true },
                    { text: "alt", isCorrect: false },
                    { text: "href", isCorrect: false },
                    { text: "link", isCorrect: false }
                ]
            },
            {
                question: "Qual é a tag HTML correta para criar uma lista não ordenada?",
                options: [
                    { text: "<ul>", isCorrect: true },
                    { text: "<ol>", isCorrect: false },
                    { text: "<li>", isCorrect: false },
                    { text: "<list>", isCorrect: false }
                ]
            },
            {
                question: "Qual é a unidade de medida padrão usada em CSS para tamanhos relativos de fonte?",
                options: [
                    { text: "em", isCorrect: true },
                    { text: "px", isCorrect: false },
                    { text: "pt", isCorrect: false },
                    { text: "rem", isCorrect: false }
                ]
            }
        ]
    },
    {
        level: 2, // Nível 2 (Intermediário)
        questions: [
            {
                question: "Qual é a tag HTML usada para inserir uma imagem?",
                options: [
                    { text: "<img>", isCorrect: true },
                    { text: "<image>", isCorrect: false },
                    { text: "<src>", isCorrect: false },
                    { text: "<picture>", isCorrect: false }
                ]
            },
            {
                question: "Como você centraliza um texto em CSS?",
                options: [
                    { text: "text-align: center;", isCorrect: true },
                    { text: "align-text: center;", isCorrect: false },
                    { text: "text-center: align;", isCorrect: false },
                    { text: "center: text-align;", isCorrect: false }
                ]
            },
            {
                question: "Como você adiciona um comentário em JavaScript?",
                options: [
                    { text: "// Isso é um comentário", isCorrect: true },
                    { text: "<!-- Isso é um comentário -->", isCorrect: false },
                    { text: "/* Isso é um comentário */", isCorrect: false },
                    { text: "** Isso é um comentário", isCorrect: false }
                ]
            },
            {
                question: "Qual seletor CSS seleciona todos os elementos <p> dentro de um <div>?",
                options: [
                    { text: "div > p", isCorrect: false },
                    { text: "div p", isCorrect: true },
                    { text: "p > div", isCorrect: false },
                    { text: "p + div", isCorrect: false }
                ]
            },
            {
                question: "Como você declara uma variável em JavaScript?",
                options: [
                    { text: "var", isCorrect: false },
                    { text: "let", isCorrect: false },
                    { text: "const", isCorrect: false },
                    { text: "Todas as anteriores", isCorrect: true }
                ]
            },
            {
                question: "Como se chama o documento padrão HTML?",
                options: [
                    { text: "index.html", isCorrect: true },
                    { text: "home.html", isCorrect: false },
                    { text: "main.html", isCorrect: false },
                    { text: "default.html", isCorrect: false }
                ]
            },
            {
                question: "Como você define uma borda arredondada em CSS?",
                options: [
                    { text: "border-radius", isCorrect: true },
                    { text: "round-border", isCorrect: false },
                    { text: "border-curve", isCorrect: false },
                    { text: "border-rounded", isCorrect: false }
                ]
            },
            {
                question: "Qual é a maneira correta de iniciar uma função em JavaScript?",
                options: [
                    { text: "function minhaFuncao() {}", isCorrect: true },
                    { text: "func() minhaFuncao {}", isCorrect: false },
                    { text: "func minhaFuncao() {}", isCorrect: false },
                    { text: "minhaFuncao function() {}", isCorrect: false }
                ]
            },
            {
                question: "Como você define uma margem em CSS?",
                options: [
                    { text: "margin", isCorrect: true },
                    { text: "padding", isCorrect: false },
                    { text: "spacing", isCorrect: false },
                    { text: "gap", isCorrect: false }
                ]
            },
            {
                question: "Qual é o valor padrão da propriedade CSS 'display' para blocos?",
                options: [
                    { text: "block", isCorrect: true },
                    { text: "inline", isCorrect: false },
                    { text: "flex", isCorrect: false },
                    { text: "grid", isCorrect: false }
                ]
            },
            {
                question: "Como você aplica estilos inline a um elemento HTML?",
                options: [
                    { text: "style='propriedade: valor;'", isCorrect: true },
                    { text: "class='propriedade: valor;'", isCorrect: false },
                    { text: "id='propriedade: valor;'", isCorrect: false },
                    { text: "css='propriedade: valor;'", isCorrect: false }
                ]
            },
            {
                question: "Qual evento JavaScript é disparado quando uma página HTML é carregada?",
                options: [
                    { text: "onload", isCorrect: true },
                    { text: "onclick", isCorrect: false },
                    { text: "onfocus", isCorrect: false },
                    { text: "onchange", isCorrect: false }
                ]
            },
            {
                question: "Como você define um conjunto de regras CSS para uma classe?",
                options: [
                    { text: ".minhaClasse {}", isCorrect: true },
                    { text: "#minhaClasse {}", isCorrect: false },
                    { text: "minhaClasse {}", isCorrect: false },
                    { text: "classe.minhaClasse {}", isCorrect: false }
                ]
            }
        ]
    },
    {
        level: 3, // Nível 3 (Avançado)
        questions: [
            {
                question: "Qual método JavaScript é usado para transformar um JSON em objeto?",
                options: [
                    { text: "JSON.parse()", isCorrect: true },
                    { text: "JSON.stringify()", isCorrect: false },
                    { text: "JSON.convert()", isCorrect: false },
                    { text: "JSON.object()", isCorrect: false }
                ]
            },
            {
                question: "Qual propriedade CSS é usada para adicionar sombra a texto?",
                options: [
                    { text: "text-shadow", isCorrect: true },
                    { text: "box-shadow", isCorrect: false },
                    { text: "shadow-text", isCorrect: false },
                    { text: "font-shadow", isCorrect: false }
                ]
            },
            {
                question: "Qual tag HTML é usada para definir um formulário?",
                options: [
                    { text: "<form>", isCorrect: true },
                    { text: "<input>", isCorrect: false },
                    { text: "<field>", isCorrect: false },
                    { text: "<submit>", isCorrect: false }
                ]
            },
            {
                question: "Como você cria um evento 'click' em JavaScript?",
                options: [
                    { text: "element.addEventListener('click', func);", isCorrect: true },
                    { text: "element.onClick = func;", isCorrect: false },
                    { text: "element.click(func);", isCorrect: false },
                    { text: "addEvent(element, 'click', func);", isCorrect: false }
                ]
            },
            {
                question: "Como você usa uma variável global em JavaScript?",
                options: [
                    { text: "declarando-a fora de qualquer função", isCorrect: true },
                    { text: "declarando-a dentro de uma função", isCorrect: false },
                    { text: "usando 'let' para defini-la", isCorrect: false },
                    { text: "sem declaração", isCorrect: false }
                ]
            },
            {
                question: "Qual método é usado para remover o último elemento de um array em JavaScript?",
                options: [
                    { text: "pop()", isCorrect: true },
                    { text: "shift()", isCorrect: false },
                    { text: "slice()", isCorrect: false },
                    { text: "splice()", isCorrect: false }
                ]
            },
            {
                question: "Qual é a tag HTML para criar um link que abre em uma nova aba?",
                options: [
                    { text: "<a target='_blank'>", isCorrect: true },
                    { text: "<link target='_new'>", isCorrect: false },
                    { text: "<a new='true'>", isCorrect: false },
                    { text: "<link target='_blank'>", isCorrect: false }
                ]
            },
            {
                question: "Qual é a diferença entre '==' e '===' em JavaScript?",
                options: [
                    { text: "'==' verifica valor; '===' verifica valor e tipo", isCorrect: true },
                    { text: "'==' verifica valor e tipo; '===' verifica apenas valor", isCorrect: false },
                    { text: "Não há diferença", isCorrect: false },
                    { text: "'===' verifica apenas tipo; '==' verifica valor", isCorrect: false }
                ]
            },
            {
                question: "Qual propriedade CSS é usada para alinhar itens em um contêiner flexível?",
                options: [
                    { text: "justify-content", isCorrect: false },
                    { text: "align-items", isCorrect: true },
                    { text: "align-content", isCorrect: false },
                    { text: "align-justify", isCorrect: false }
                ]
            },
            {
                question: "Qual é o objetivo do atributo 'defer' no script de JavaScript?",
                options: [
                    { text: "Executar o script após o HTML ser analisado", isCorrect: true },
                    { text: "Carregar o script de forma síncrona", isCorrect: false },
                    { text: "Impedir que o script seja carregado", isCorrect: false },
                    { text: "Executar o script antes do HTML ser analisado", isCorrect: false }
                ]
            },
            {
                question: "Como você define uma animação em CSS?",
                options: [
                    { text: "@keyframes", isCorrect: true },
                    { text: "@animation", isCorrect: false },
                    { text: "@transitions", isCorrect: false },
                    { text: "@frames", isCorrect: false }
                ]
            },
            {
                question: "Como você define uma propriedade CSS apenas para um elemento específico em um estilo interno?",
                options: [
                    { text: "elemento { propriedade: valor; }", isCorrect: true },
                    { text: "elemento: propriedade valor;", isCorrect: false },
                    { text: "elemento.propriedade = valor;", isCorrect: false },
                    { text: "#elemento { propriedade: valor; }", isCorrect: false }
                ]
            }
        ]
    },
    {
        level: 4, // Nível 4 (Difícil)
        questions: [
            {
                question: "Qual método JavaScript é usado para combinar dois ou mais arrays?",
                options: [
                    { text: "concat()", isCorrect: true },
                    { text: "join()", isCorrect: false },
                    { text: "merge()", isCorrect: false },
                    { text: "combine()", isCorrect: false }
                ]
            },
            {
                question: "Como você faz uma requisição AJAX em JavaScript?",
                options: [
                    { text: "new XMLHttpRequest()", isCorrect: true },
                    { text: "fetch()", isCorrect: false },
                    { text: "$.ajax()", isCorrect: false },
                    { text: "axios()", isCorrect: false }
                ]
            },
            {
                question: "Qual é a diferença entre 'let' e 'var' em JavaScript?",
                options: [
                    { text: "'let' tem escopo de bloco; 'var' tem escopo de função", isCorrect: true },
                    { text: "'let' e 'var' são iguais", isCorrect: false },
                    { text: "'var' é mais seguro que 'let'", isCorrect: false },
                    { text: "'let' não pode ser reatribuído", isCorrect: false }
                ]
            },
            {
                question: "Como você pode evitar que um botão envie um formulário?",
                options: [
                    { text: "event.preventDefault()", isCorrect: true },
                    { text: "return false;", isCorrect: false },
                    { text: "stopPropagation()", isCorrect: false },
                    { text: "disable()", isCorrect: false }
                ]
            },
            {
                question: "Qual propriedade CSS é usada para criar um layout em grade?",
                options: [
                    { text: "display: grid;", isCorrect: true },
                    { text: "layout: grid;", isCorrect: false },
                    { text: "grid-layout: true;", isCorrect: false },
                    { text: "grid: true;", isCorrect: false }
                ]
            },
            {
                question: "Qual é a sintaxe correta para importar um módulo em JavaScript?",
                options: [
                    { text: "import { módulo } from 'caminho';", isCorrect: true },
                    { text: "include 'caminho';", isCorrect: false },
                    { text: "require('caminho');", isCorrect: false },
                    { text: "load('caminho');", isCorrect: false }
                ]
            },
            {
                question: "Como você pode criar um loop que itera sobre um array em JavaScript?",
                options: [
                    { text: "for (let i = 0; i < array.length; i++) {}", isCorrect: true },
                    { text: "foreach (array as item) {}", isCorrect: false },
                    { text: "for each item in array {}", isCorrect: false },
                    { text: "for (item of array) {}", isCorrect: false }
                ]
            },
            {
                question: "Qual é a propriedade CSS usada para definir o comportamento flexível?",
                options: [
                    { text: "flex", isCorrect: true },
                    { text: "flex-direction", isCorrect: false },
                    { text: "flex-grow", isCorrect: false },
                    { text: "flex-basis", isCorrect: false }
                ]
            },
            {
                question: "Como você pode criar um objeto em JavaScript?",
                options: [
                    { text: "let obj = {}", isCorrect: true },
                    { text: "let obj = new Object();", isCorrect: false },
                    { text: "let obj = Object.create();", isCorrect: false },
                    { text: "let obj = []; ", isCorrect: false }
                ]
            },
            {
                question: "Qual é a função do método 'filter()' em arrays?",
                options: [
                    { text: "Criar um novo array com elementos que passam no teste", isCorrect: true },
                    { text: "Modificar elementos do array", isCorrect: false },
                    { text: "Ordenar os elementos do array", isCorrect: false },
                    { text: "Adicionar elementos ao array", isCorrect: false }
                ]
            },
            {
                question: "Qual propriedade CSS é usada para mudar o cursor do mouse?",
                options: [
                    { text: "cursor", isCorrect: true },
                    { text: "pointer", isCorrect: false },
                    { text: "mouse", isCorrect: false },
                    { text: "style-cursor", isCorrect: false }
                ]
            }
        ]
    },
    {
        level: 5, // Nível 5 (Especialista)
        questions: [
            {
                question: "O que é um closure em JavaScript?",
                options: [
                    { text: "Uma função que lembra seu escopo léxico", isCorrect: true },
                    { text: "Uma função aninhada", isCorrect: false },
                    { text: "Uma função que não retorna nada", isCorrect: false },
                    { text: "Uma função de callback", isCorrect: false }
                ]
            },
            {
                question: "O que faz o método 'reduce()' em um array?",
                options: [
                    { text: "Aplica uma função a cada elemento e reduz para um único valor", isCorrect: true },
                    { text: "Cria um novo array com elementos filtrados", isCorrect: false },
                    { text: "Ordena o array", isCorrect: false },
                    { text: "Adiciona um novo elemento ao array", isCorrect: false }
                ]
            },
            {
                question: "Como você define um proxy em JavaScript?",
                options: [
                    { text: "new Proxy(target, handler)", isCorrect: true },
                    { text: "Proxy(target, handler)", isCorrect: false },
                    { text: "createProxy(target, handler)", isCorrect: false },
                    { text: "proxy(target, handler)", isCorrect: false }
                ]
            },
            {
                question: "O que é 'hoisting' em JavaScript?",
                options: [
                    { text: "Eleva declarações de variáveis e funções para o topo", isCorrect: true },
                    { text: "Eleva funções somente", isCorrect: false },
                    { text: "Remove variáveis não utilizadas", isCorrect: false },
                    { text: "Modifica o escopo das variáveis", isCorrect: false }
                ]
            },
            {
                question: "Como você pode otimizar o desempenho de um site?",
                options: [
                    { text: "Minificando arquivos CSS e JavaScript", isCorrect: true },
                    { text: "Aumentando a qualidade das imagens", isCorrect: false },
                    { text: "Usando mais scripts", isCorrect: false },
                    { text: "Desabilitando o cache", isCorrect: false }
                ]
            },
            {
                question: "Qual método é usado para evitar que um objeto seja modificado?",
                options: [
                    { text: "Object.freeze()", isCorrect: true },
                    { text: "Object.preventExtensions()", isCorrect: false },
                    { text: "Object.seal()", isCorrect: false },
                    { text: "Object.defineProperty()", isCorrect: false }
                ]
            },
            {
                question: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
                options: [
                    { text: "'null' é um valor atribuído; 'undefined' é uma variável não inicializada", isCorrect: true },
                    { text: "'undefined' é um valor atribuído; 'null' é uma variável não inicializada", isCorrect: false },
                    { text: "Ambos são iguais", isCorrect: false },
                    { text: "'null' é um objeto; 'undefined' é um tipo primitivo", isCorrect: false }
                ]
            },
            {
                question: "O que faz o método 'slice()' em um array?",
                options: [
                    { text: "Retorna uma cópia de uma parte do array", isCorrect: true },
                    { text: "Adiciona elementos ao array", isCorrect: false },
                    { text: "Remove elementos do array", isCorrect: false },
                    { text: "Ordena o array", isCorrect: false }
                ]
            },
            {
                question: "Como você cria uma função de callback em JavaScript?",
                options: [
                    { text: "Passando uma função como argumento para outra função", isCorrect: true },
                    { text: "Definindo uma função dentro de outra", isCorrect: false },
                    { text: "Usando 'setTimeout'", isCorrect: false },
                    { text: "Usando 'setInterval'", isCorrect: false }
                ]
            },
            {
                question: "Qual é a diferença entre 'async' e 'await' em JavaScript?",
                options: [
                    { text: "'async' define uma função assíncrona; 'await' pausa a execução até uma Promise ser resolvida", isCorrect: true },
                    { text: "'async' pausa a execução; 'await' define uma função assíncrona", isCorrect: false },
                    { text: "Ambos são iguais", isCorrect: false },
                    { text: "'await' define uma função; 'async' pausa a execução", isCorrect: false }
                ]
            }
        ]
    }
];
