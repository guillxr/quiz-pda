const quizData = [
    {
        level: 1, // Nível 1 (Fácil)
        questions: [
            [
                {
                    question: "O que significa HTML?",
                    answers: [
                        { text: "Hyper Text Markup Language", isCorrect: true },
                        { text: "Home Tool Markup Language", isCorrect: false },
                        { text: "Hyperlinks and Text Markup Language", isCorrect: false },
                        { text: "Hyper Text Module Language", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a tag HTML para inserir um link?",
                    answers: [
                        { text: "<a>", isCorrect: true },
                        { text: "<link>", isCorrect: false },
                        { text: "<href>", isCorrect: false },
                        { text: "<url>", isCorrect: false }
                    ]
                },
                {
                    question: "Como você define a cor de fundo em CSS?",
                    answers: [
                        { text: "background-color", isCorrect: true },
                        { text: "color", isCorrect: false },
                        { text: "bgcolor", isCorrect: false },
                        { text: "back-color", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a tag HTML correta para criar uma tabela?",
                    answers: [
                        { text: "<table>", isCorrect: true },
                        { text: "<tbl>", isCorrect: false },
                        { text: "<tab>", isCorrect: false },
                        { text: "<td>", isCorrect: false }
                    ]
                },
                {
                    question: "Em JavaScript, qual comando exibe uma mensagem de alerta?",
                    answers: [
                        { text: "alert()", isCorrect: true },
                        { text: "console.log()", isCorrect: false },
                        { text: "prompt()", isCorrect: false },
                        { text: "confirm()", isCorrect: false }
                    ]
                }
            ],
            [
                {
                    question: "Qual tag HTML é usada para criar um botão?",
                    answers: [
                        { text: "<button>", isCorrect: true },
                        { text: "<input>", isCorrect: false },
                        { text: "<btn>", isCorrect: false },
                        { text: "<form>", isCorrect: false }
                    ]
                },
                {
                    question: "Qual propriedade CSS é usada para mudar a cor do texto?",
                    answers: [
                        { text: "color", isCorrect: true },
                        { text: "text-color", isCorrect: false },
                        { text: "font-color", isCorrect: false },
                        { text: "background-color", isCorrect: false }
                    ]
                },
                {
                    question: "Como você cria um comentário em HTML?",
                    answers: [
                        { text: "<!-- comentário -->", isCorrect: true },
                        { text: "// comentário", isCorrect: false },
                        { text: "/* comentário */", isCorrect: false },
                        { text: "** comentário **", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a tag HTML correta para um parágrafo?",
                    answers: [
                        { text: "<p>", isCorrect: true },
                        { text: "<para>", isCorrect: false },
                        { text: "<pg>", isCorrect: false },
                        { text: "<pr>", isCorrect: false }
                    ]
                },
                {
                    question: "Como você inclui um arquivo CSS externo em um documento HTML?",
                    answers: [
                        { text: "<link rel='stylesheet' href='style.css'>", isCorrect: true },
                        { text: "<stylesheet>style.css</stylesheet>", isCorrect: false },
                        { text: "<css src='style.css'>", isCorrect: false },
                        { text: "<style rel='style.css'>", isCorrect: false }
                    ]
                }
            ],
            [
                {
                    question: "Qual é o atributo HTML para definir uma imagem?",
                    answers: [
                        { text: "src", isCorrect: true },
                        { text: "alt", isCorrect: false },
                        { text: "href", isCorrect: false },
                        { text: "link", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a tag HTML correta para criar uma lista não ordenada?",
                    answers: [
                        { text: "<ul>", isCorrect: true },
                        { text: "<ol>", isCorrect: false },
                        { text: "<li>", isCorrect: false },
                        { text: "<list>", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a unidade de medida padrão usada em CSS para tamanhos relativos de fonte?",
                    answers: [
                        { text: "rem", isCorrect: true },
                        { text: "px", isCorrect: false },
                        { text: "pt", isCorrect: false },
                        { text: "em", isCorrect: false }
                    ]
                },
                {
                    question: "Qual atributo HTML é usado para definir o texto alternativo de uma imagem?",
                    answers: [
                        { text: "alt", isCorrect: true },
                        { text: "src", isCorrect: false },
                        { text: "title", isCorrect: false },
                        { text: "href", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a extensão de arquivos para salvar um documento HTML?",
                    answers: [
                        { text: ".html", isCorrect: true },
                        { text: ".css", isCorrect: false },
                        { text: ".js", isCorrect: false },
                        { text: ".doc", isCorrect: false }
                    ]
                }
            ]
        ]
    },
    {
        level: 2, // Nível 2 (Intermediário)
        questions: [
            [
                {
                    question: "Qual é a tag HTML usada para inserir uma imagem?",
                    answers: [
                        { text: "<img>", isCorrect: true },
                        { text: "<image>", isCorrect: false },
                        { text: "<src>", isCorrect: false },
                        { text: "<picture>", isCorrect: false }
                    ]
                },
                {
                    question: "Como você centraliza um texto em CSS?",
                    answers: [
                        { text: "text-align: center;", isCorrect: true },
                        { text: "align-text: center;", isCorrect: false },
                        { text: "text-center: align;", isCorrect: false },
                        { text: "center: text-align;", isCorrect: false }
                    ]
                },
                {
                    question: "Como você adiciona um comentário em JavaScript?",
                    answers: [
                        { text: "// Isso é um comentário", isCorrect: true },
                        { text: "<!-- Isso é um comentário -->", isCorrect: false },
                        { text: "/* Isso é um comentário */", isCorrect: false },
                        { text: "** Isso é um comentário", isCorrect: false }
                    ]
                },
                {
                    question: "Qual seletor CSS seleciona todos os elementos <p> dentro de um <div>?",
                    answers: [
                        { text: "div > p", isCorrect: false },
                        { text: "div p", isCorrect: true },
                        { text: "p > div", isCorrect: false },
                        { text: "p + div", isCorrect: false }
                    ]
                },
                {
                    question: "Como você declara uma variável em JavaScript?",
                    answers: [
                        { text: "var", isCorrect: false },
                        { text: "let", isCorrect: false },
                        { text: "const", isCorrect: false },
                        { text: "Todas as anteriores", isCorrect: true }
                    ]
                }
            ],
            [
                {
                    question: "Como se chama o documento padrão HTML?",
                    answers: [
                        { text: "index.html", isCorrect: true },
                        { text: "home.html", isCorrect: false },
                        { text: "main.html", isCorrect: false },
                        { text: "default.html", isCorrect: false }
                    ]
                },
                {
                    question: "Como você define uma borda arredondada em CSS?",
                    answers: [
                        { text: "border-radius", isCorrect: true },
                        { text: "round-border", isCorrect: false },
                        { text: "border-curve", isCorrect: false },
                        { text: "border-rounded", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a maneira correta de iniciar uma função em JavaScript?",
                    answers: [
                        { text: "function minhaFuncao() {}", isCorrect: true },
                        { text: "func() minhaFuncao {}", isCorrect: false },
                        { text: "func minhaFuncao() {}", isCorrect: false },
                        { text: "minhaFuncao function() {}", isCorrect: false }
                    ]
                },
                {
                    question: "Como você define uma margem em CSS?",
                    answers: [
                        { text: "margin", isCorrect: true },
                        { text: "padding", isCorrect: false },
                        { text: "spacing", isCorrect: false },
                        { text: "gap", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é o valor padrão da propriedade CSS 'display' para blocos?",
                    answers: [
                        { text: "block", isCorrect: true },
                        { text: "inline", isCorrect: false },
                        { text: "flex", isCorrect: false },
                        { text: "grid", isCorrect: false }
                    ]
                }    
            ],
            [
                {
                    question: "Como você aplica estilos inline a um elemento HTML?",
                    answers: [
                        { text: "style='propriedade: valor;'", isCorrect: true },
                        { text: "class='propriedade: valor;'", isCorrect: false },
                        { text: "id='propriedade: valor;'", isCorrect: false },
                        { text: "css='propriedade: valor;'", isCorrect: false }
                    ]
                },
                {
                    question: "Qual evento JavaScript é disparado quando uma página HTML é carregada?",
                    answers: [
                        { text: "onload", isCorrect: true },
                        { text: "onclick", isCorrect: false },
                        { text: "onfocus", isCorrect: false },
                        { text: "onchange", isCorrect: false }
                    ]
                },
                {
                    question: "Como você define um conjunto de regras CSS para uma classe?",
                    answers: [
                        { text: ".minhaClasse {}", isCorrect: true },
                        { text: "#minhaClasse {}", isCorrect: false },
                        { text: "minhaClasse {}", isCorrect: false },
                        { text: "classe.minhaClasse {}", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é o seletor CSS correto para selecionar todos os elementos <p>?",
                    answers: [
                        { text: "p", isCorrect: true },
                        { text: "#p", isCorrect: false },
                        { text: ".p", isCorrect: false },
                        { text: "*p", isCorrect: false }
                    ]
                },
                {
                    question: "Qual unidade CSS é relativa ao tamanho da fonte do elemento pai?",
                    answers: [
                        { text: "em", isCorrect: true },
                        { text: "px", isCorrect: false },
                        { text: "rem", isCorrect: false },
                        { text: "%", isCorrect: false }
                    ]
                }
            ]
        ]
    },
    {
        level: 3, // Nível 3 (Avançado)
        questions: [
            [
                {
                    question: "Qual método JavaScript é usado para transformar um JSON em objeto?",
                    answers: [
                        { text: "JSON.parse()", isCorrect: true },
                        { text: "JSON.stringify()", isCorrect: false },
                        { text: "JSON.convert()", isCorrect: false },
                        { text: "JSON.object()", isCorrect: false }
                    ]
                },
                {
                    question: "Qual propriedade CSS é usada para adicionar sombra a texto?",
                    answers: [
                        { text: "text-shadow", isCorrect: true },
                        { text: "box-shadow", isCorrect: false },
                        { text: "shadow-text", isCorrect: false },
                        { text: "font-shadow", isCorrect: false }
                    ]
                },
                {
                    question: "Qual tag HTML é usada para definir um formulário?",
                    answers: [
                        { text: "<form>", isCorrect: true },
                        { text: "<input>", isCorrect: false },
                        { text: "<field>", isCorrect: false },
                        { text: "<submit>", isCorrect: false }
                    ]
                },
                {
                    question: "Como você cria um evento 'click' em JavaScript?",
                    answers: [
                        { text: "element.addEventListener('click', func);", isCorrect: true },
                        { text: "element.onClick = func;", isCorrect: false },
                        { text: "element.click(func);", isCorrect: false },
                        { text: "addEvent(element, 'click', func);", isCorrect: false }
                    ]
                },
                {
                    question: "Como você usa uma variável global em JavaScript?",
                    answers: [
                        { text: "declarando-a fora de qualquer função", isCorrect: true },
                        { text: "declarando-a dentro de uma função", isCorrect: false },
                        { text: "usando 'let' para defini-la", isCorrect: false },
                        { text: "sem declaração", isCorrect: false }
                    ]
                }
            ],
            [
                {
                    question: "Qual método é usado para remover o último elemento de um array em JavaScript?",
                    answers: [
                        { text: "pop()", isCorrect: true },
                        { text: "shift()", isCorrect: false },
                        { text: "slice()", isCorrect: false },
                        { text: "splice()", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a tag HTML para criar um link que abre em uma nova aba?",
                    answers: [
                        { text: "<a target='_blank'>", isCorrect: true },
                        { text: "<link target='_new'>", isCorrect: false },
                        { text: "<a new='true'>", isCorrect: false },
                        { text: "<link target='_blank'>", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a diferença entre '==' e '===' em JavaScript?",
                    answers: [
                        { text: "'==' verifica valor; '===' verifica valor e tipo", isCorrect: true },
                        { text: "'==' verifica valor e tipo; '===' verifica apenas valor", isCorrect: false },
                        { text: "Não há diferença", isCorrect: false },
                        { text: "'===' verifica apenas tipo; '==' verifica valor", isCorrect: false }
                    ]
                },
                {
                    question: "Qual propriedade CSS é usada para alinhar itens em um contêiner flexível?",
                    answers: [
                        { text: "justify-content", isCorrect: false },
                        { text: "align-items", isCorrect: true },
                        { text: "align-content", isCorrect: false },
                        { text: "align-justify", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é o objetivo do atributo 'defer' no script de JavaScript?",
                    answers: [
                        { text: "Executar o script após o HTML ser analisado", isCorrect: true },
                        { text: "Carregar o script de forma síncrona", isCorrect: false },
                        { text: "Impedir que o script seja carregado", isCorrect: false },
                        { text: "Executar o script antes do HTML ser analisado", isCorrect: false }
                    ]
                }
            ],
            [
                {
                    question: "Como você define uma animação em CSS?",
                    answers: [
                        { text: "@keyframes", isCorrect: true },
                        { text: "@animation", isCorrect: false },
                        { text: "@transitions", isCorrect: false },
                        { text: "@frames", isCorrect: false }
                    ]
                },
                {
                    question: "Como você define uma propriedade CSS apenas para um elemento específico em um estilo interno?",
                    answers: [
                        { text: "elemento { propriedade: valor; }", isCorrect: true },
                        { text: "elemento: propriedade valor;", isCorrect: false },
                        { text: "elemento.propriedade = valor;", isCorrect: false },
                        { text: "#elemento { propriedade: valor; }", isCorrect: false }
                    ]
                },
                {
                    question: "Qual propriedade CSS é usada para controlar o espaçamento entre linhas de texto?",
                    answers: [
                        { text: "line-height", isCorrect: true },
                        { text: "letter-spacing", isCorrect: false },
                        { text: "text-spacing", isCorrect: false },
                        { text: "height", isCorrect: false }
                    ]
                },
                {
                    question: "Como você pode verificar o tipo de uma variável em JavaScript?",
                    answers: [
                        { text: "typeof", isCorrect: true },
                        { text: "instanceof", isCorrect: false },
                        { text: "type()", isCorrect: false },
                        { text: "varType()", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a diferença entre 'visibility: hidden' e 'display: none' em CSS?",
                    answers: [
                        { text: "'visibility: hidden' oculta o elemento, mas ainda ocupa espaço; 'display: none' remove o elemento do fluxo do layout", isCorrect: true },
                        { text: "'visibility: hidden' remove o elemento do layout; 'display: none' apenas oculta o elemento", isCorrect: false },
                        { text: "Ambos são a mesma coisa", isCorrect: false },
                        { text: "'display: none' deixa o elemento transparente; 'visibility: hidden' oculta o elemento completamente", isCorrect: false }
                    ]
                }                
            ]
        ]
    },
    {
        level: 4, // Nível 4 (Difícil)
        questions: [
            [
                {
                    question: "Qual método JavaScript é usado para combinar dois ou mais arrays?",
                    answers: [
                        { text: "concat()", isCorrect: true },
                        { text: "join()", isCorrect: false },
                        { text: "merge()", isCorrect: false },
                        { text: "combine()", isCorrect: false }
                    ]
                },
                {
                    question: "Como você faz uma requisição AJAX em JavaScript?",
                    answers: [
                        { text: "new XMLHttpRequest()", isCorrect: true },
                        { text: "fetch()", isCorrect: false },
                        { text: "$.ajax()", isCorrect: false },
                        { text: "axios()", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a diferença entre 'let' e 'var' em JavaScript?",
                    answers: [
                        { text: "'let' tem escopo de bloco; 'var' tem escopo de função", isCorrect: true },
                        { text: "'let' e 'var' são iguais", isCorrect: false },
                        { text: "'var' é mais seguro que 'let'", isCorrect: false },
                        { text: "'let' não pode ser reatribuído", isCorrect: false }
                    ]
                },
                {
                    question: "Como você pode evitar que um botão envie um formulário?",
                    answers: [
                        { text: "event.preventDefault()", isCorrect: true },
                        { text: "return false;", isCorrect: false },
                        { text: "stopPropagation()", isCorrect: false },
                        { text: "disable()", isCorrect: false }
                    ]
                },
                {
                    question: "Qual propriedade CSS é usada para criar um layout em grade?",
                    answers: [
                        { text: "display: grid;", isCorrect: true },
                        { text: "layout: grid;", isCorrect: false },
                        { text: "grid-layout: true;", isCorrect: false },
                        { text: "grid: true;", isCorrect: false }
                    ]
                }
            ],
            [
                {
                    question: "Qual é a sintaxe correta para importar um módulo em JavaScript?",
                    answers: [
                        { text: "import { módulo } from 'caminho';", isCorrect: true },
                        { text: "include 'caminho';", isCorrect: false },
                        { text: "require('caminho');", isCorrect: false },
                        { text: "load('caminho');", isCorrect: false }
                    ]
                },
                {
                    question: "Como você pode criar um loop que itera sobre um array em JavaScript?",
                    answers: [
                        { text: "for (let i = 0; i < array.length; i++) {}", isCorrect: true },
                        { text: "foreach (array as item) {}", isCorrect: false },
                        { text: "for each item in array {}", isCorrect: false },
                        { text: "for (item of array) {}", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a propriedade CSS usada para definir o comportamento flexível?",
                    answers: [
                        { text: "flex", isCorrect: true },
                        { text: "flex-direction", isCorrect: false },
                        { text: "flex-grow", isCorrect: false },
                        { text: "flex-basis", isCorrect: false }
                    ]
                },
                {
                    question: "Como você pode criar um objeto em JavaScript?",
                    answers: [
                        { text: "let obj = {}", isCorrect: true },
                        { text: "let obj = new Object();", isCorrect: false },
                        { text: "let obj = Object.create();", isCorrect: false },
                        { text: "let obj = []; ", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a função do método 'filter()' em arrays?",
                    answers: [
                        { text: "Criar um novo array com elementos que passam no teste", isCorrect: true },
                        { text: "Modificar elementos do array", isCorrect: false },
                        { text: "Ordenar os elementos do array", isCorrect: false },
                        { text: "Adicionar elementos ao array", isCorrect: false }
                    ]
                }
            ],
            [
                {
                    question: "Qual propriedade CSS é usada para mudar o cursor do mouse?",
                    answers: [
                        { text: "cursor", isCorrect: true },
                        { text: "pointer", isCorrect: false },
                        { text: "mouse", isCorrect: false },
                        { text: "style-cursor", isCorrect: false }
                    ]
                },
                {
                    question: "Qual método JavaScript é usado para encadear várias promessas?",
                    answers: [
                        { text: ".then()", isCorrect: true },
                        { text: ".join()", isCorrect: false },
                        { text: ".concat()", isCorrect: false },
                        { text: ".chain()", isCorrect: false }
                    ]
                },
                {
                    question: "O que significa o valor 'auto' na propriedade CSS 'margin'?",
                    answers: [
                        { text: "Centraliza o elemento horizontalmente", isCorrect: true },
                        { text: "Define margem de 0px", isCorrect: false },
                        { text: "Aplica margem automática de acordo com o conteúdo", isCorrect: false },
                        { text: "Define uma margem padrão", isCorrect: false }
                    ]
                },
                {
                    question: "Como você altera o conteúdo de um elemento HTML com id 'meuElemento' usando JavaScript?",
                    answers: [
                        { text: "document.getElementById('meuElemento').innerHTML = 'Novo conteúdo';", isCorrect: true },
                        { text: "document.getElementByClass('meuElemento').innerHTML = 'Novo conteúdo';", isCorrect: false },
                        { text: "document.querySelector('.meuElemento').innerText = 'Novo conteúdo';", isCorrect: false },
                        { text: "document.setElementContent('meuElemento', 'Novo conteúdo');", isCorrect: false }
                    ]
                },
                {
                    question: "O que acontece se você usar 'let' e 'var' para declarar variáveis com o mesmo nome no mesmo escopo?",
                    answers: [
                        { text: "Um erro de sintaxe será lançado", isCorrect: true },
                        { text: "O valor da variável será sobrescrito", isCorrect: false },
                        { text: "Ambas as variáveis coexistem sem problemas", isCorrect: false },
                        { text: "Não acontece nada, o código executa normalmente", isCorrect: false }
                    ]
                }
            ]
        ]
    },
    {
        level: 5, // Nível 5 (Especialista)
        questions: [
            [
                {
                    question: "O que é um closure em JavaScript?",
                    answers: [
                        { text: "Uma função que lembra seu escopo léxico", isCorrect: true },
                        { text: "Uma função aninhada", isCorrect: false },
                        { text: "Uma função que não retorna nada", isCorrect: false },
                        { text: "Uma função de callback", isCorrect: false }
                    ]
                },
                {
                    question: "O que faz o método 'reduce()' em um array?",
                    answers: [
                        { text: "Aplica uma função a cada elemento e reduz para um único valor", isCorrect: true },
                        { text: "Cria um novo array com elementos filtrados", isCorrect: false },
                        { text: "Ordena o array", isCorrect: false },
                        { text: "Adiciona um novo elemento ao array", isCorrect: false }
                    ]
                },
                {
                    question: "Como você define um proxy em JavaScript?",
                    answers: [
                        { text: "new Proxy(target, handler)", isCorrect: true },
                        { text: "Proxy(target, handler)", isCorrect: false },
                        { text: "createProxy(target, handler)", isCorrect: false },
                        { text: "proxy(target, handler)", isCorrect: false }
                    ]
                },
                {
                    question: "O que é 'hoisting' em JavaScript?",
                    answers: [
                        { text: "Eleva declarações de variáveis e funções para o topo", isCorrect: true },
                        { text: "Eleva funções somente", isCorrect: false },
                        { text: "Remove variáveis não utilizadas", isCorrect: false },
                        { text: "Modifica o escopo das variáveis", isCorrect: false }
                    ]
                },
                {
                    question: "Como você pode otimizar o desempenho de um site?",
                    answers: [
                        { text: "Minificando arquivos CSS e JavaScript", isCorrect: true },
                        { text: "Aumentando a qualidade das imagens", isCorrect: false },
                        { text: "Usando mais scripts", isCorrect: false },
                        { text: "Desabilitando o cache", isCorrect: false }
                    ]
                }
            ],
            [
                {
                    question: "Qual método é usado para evitar que um objeto seja modificado?",
                    answers: [
                        { text: "Object.freeze()", isCorrect: true },
                        { text: "Object.preventExtensions()", isCorrect: false },
                        { text: "Object.seal()", isCorrect: false },
                        { text: "Object.defineProperty()", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
                    answers: [
                        { text: "'null' é um valor atribuído; 'undefined' é uma variável não inicializada", isCorrect: true },
                        { text: "'undefined' é um valor atribuído; 'null' é uma variável não inicializada", isCorrect: false },
                        { text: "Ambos são iguais", isCorrect: false },
                        { text: "'null' é um objeto; 'undefined' é um tipo primitivo", isCorrect: false }
                    ]
                },
                {
                    question: "O que faz o método 'slice()' em um array?",
                    answers: [
                        { text: "Retorna uma cópia de uma parte do array", isCorrect: true },
                        { text: "Adiciona elementos ao array", isCorrect: false },
                        { text: "Remove elementos do array", isCorrect: false },
                        { text: "Ordena o array", isCorrect: false }
                    ]
                },
                {
                    question: "Como você cria uma função de callback em JavaScript?",
                    answers: [
                        { text: "Passando uma função como argumento para outra função", isCorrect: true },
                        { text: "Definindo uma função dentro de outra", isCorrect: false },
                        { text: "Usando 'setTimeout'", isCorrect: false },
                        { text: "Usando 'setInterval'", isCorrect: false }
                    ]
                },
                {
                    question: "Qual é a diferença entre 'async' e 'await' em JavaScript?",
                    answers: [
                        { text: "'async' define uma função assíncrona; 'await' pausa a execução até uma Promise ser resolvida", isCorrect: true },
                        { text: "'async' pausa a execução; 'await' define uma função assíncrona", isCorrect: false },
                        { text: "Ambos são iguais", isCorrect: false },
                        { text: "'await' define uma função; 'async' pausa a execução", isCorrect: false }
                    ]
                }
            ],
            [
                {
                    question: "O que é uma Promise em JavaScript?",
                    answers: [
                        { text: "Um objeto que representa a conclusão (ou falha) de uma operação assíncrona", isCorrect: true },
                        { text: "Uma função que retorna um valor imediatamente", isCorrect: false },
                        { text: "Um tipo de variável que aceita múltiplos valores", isCorrect: false },
                        { text: "Um método para manipular arrays", isCorrect: false }
                    ]
                },                
                {
                    question: "O que é o Event Loop em JavaScript?",
                    answers: [
                        { text: "Um mecanismo que lida com operações assíncronas", isCorrect: true },
                        { text: "Um loop de iteração para arrays", isCorrect: false },
                        { text: "Um método para controlar eventos", isCorrect: false },
                        { text: "Uma função que repete tarefas", isCorrect: false }
                    ]
                },
                {
                    question: "Como você pode manipular o DOM usando JavaScript moderno?",
                    answers: [
                        { text: "document.querySelector()", isCorrect: true },
                        { text: "document.getElementByClass()", isCorrect: false },
                        { text: "document.query()", isCorrect: false },
                        { text: "document.selectElement()", isCorrect: false }
                    ]
                },
                {
                    question: "O que é a técnica 'CSS Grid Layout'?",
                    answers: [
                        { text: "Um sistema de layout bidimensional que permite posicionar elementos em linhas e colunas", isCorrect: true },
                        { text: "Uma técnica de animação CSS", isCorrect: false },
                        { text: "Um método para aplicar estilos apenas em dispositivos móveis", isCorrect: false },
                        { text: "Um modelo de layout unidimensional", isCorrect: false }
                    ]
                },
                {
                    question: "O que é o Shadow DOM?",
                    answers: [
                        { text: "Uma técnica que permite encapsular o estilo e a estrutura de um componente", isCorrect: true },
                        { text: "Uma biblioteca para gerenciar estados no React", isCorrect: false },
                        { text: "Um tipo de animação CSS", isCorrect: false },
                        { text: "Uma forma de estilizar elementos do DOM", isCorrect: false }
                    ]
                }                
            ]
        ]
    }
];
