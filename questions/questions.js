const quizData = [
    {
        level: 1, // Nível 1 (Bronze)
        questions: [
            {
                completed: false,
                score: 0,
                quests: [
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
                        question: "Qual é a tag HTML correta para criar um link?",
                        answers: [
                            { text: "<a>", isCorrect: true },
                            { text: "<link>", isCorrect: false },
                            { text: "<href>", isCorrect: false },
                            { text: "<url>", isCorrect: false }
                        ]
                    },
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
                    }
                ]
            },
            {
                completed: false,
                score: 0,
                quests: [
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
                        question: "Qual propriedade CSS é usada para mudar a cor do texto?",
                        answers: [
                            { text: "color", isCorrect: true },
                            { text: "text-color", isCorrect: false },
                            { text: "font-color", isCorrect: false },
                            { text: "background-color", isCorrect: false }
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
                        question: "Qual propriedade CSS é usada para alterar o espaçamento entre as linhas de um texto?",
                        answers: [
                            { text: "line-height", isCorrect: true },
                            { text: "text-spacing", isCorrect: false },
                            { text: "letter-spacing", isCorrect: false },
                            { text: "font-size", isCorrect: false }
                        ]
                    }
                ]
            },
            {
                completed: false,
                score: 0,
                quests: [
                    {
                        question: "Em JavaScript, qual comando exibe uma mensagem de alerta?",
                        answers: [
                            { text: "alert()", isCorrect: true },
                            { text: "console.log()", isCorrect: false },
                            { text: "prompt()", isCorrect: false },
                            { text: "confirm()", isCorrect: false }
                        ]
                    },
                    {
                        question: "Como você cria uma função em JavaScript?",
                        answers: [
                            { text: "function minhaFuncao() {}", isCorrect: true },
                            { text: "minhaFuncao function() {}", isCorrect: false },
                            { text: "func minhaFuncao() {}", isCorrect: false },
                            { text: "function = minhaFuncao() {}", isCorrect: false }
                        ]
                    },
                    {
                        question: "Como você define uma variável em JavaScript?",
                        answers: [
                            { text: "let", isCorrect: true },
                            { text: "variable", isCorrect: false },
                            { text: "var", isCorrect: false },
                            { text: "define", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual método é usado para converter uma string em número em JavaScript?",
                        answers: [
                            { text: "parseInt()", isCorrect: true },
                            { text: "toNumber()", isCorrect: false },
                            { text: "NumberFormat()", isCorrect: false },
                            { text: "convertToNumber()", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
                        answers: [
                            { text: "//", isCorrect: true },
                            { text: "/*", isCorrect: false },
                            { text: "#", isCorrect: false },
                            { text: "--", isCorrect: false }
                        ]
                    }
                ]
            }
        ]
    },
    {   
        level: 2, // Nível 2 (Silver)
        questions: [
            {
                completed: false,
                score: 0,
                quests: [
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
                        question: "Como se chama o documento padrão HTML?",
                        answers: [
                            { text: "index.html", isCorrect: true },
                            { text: "home.html", isCorrect: false },
                            { text: "main.html", isCorrect: false },
                            { text: "default.html", isCorrect: false }
                        ]
                    },
                    {
                        question: "Como você define um botão de envio em HTML?",
                        answers: [
                            { text: "<button type='submit'>", isCorrect: true },
                            { text: "<submit type='button'>", isCorrect: false },
                            { text: "<button type='button'>", isCorrect: false },
                            { text: "<submit></submit>", isCorrect: false }
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
                        question: "Qual é a tag HTML correta para criar uma tabela?",
                        answers: [
                            { text: "<table>", isCorrect: true },
                            { text: "<tbl>", isCorrect: false },
                            { text: "<tab>", isCorrect: false },
                            { text: "<td>", isCorrect: false }
                        ]
                    }
                ]
            },
            {
                completed: false,
                score: 0,
                quests: [
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
                        question: "Como você define uma borda arredondada em CSS?",
                        answers: [
                            { text: "border-radius", isCorrect: true },
                            { text: "round-border", isCorrect: false },
                            { text: "border-curve", isCorrect: false },
                            { text: "border-rounded", isCorrect: false }
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
            },
            {
                completed: false,
                score: 0,
                quests: [
                    {
                        question: "Como você declara uma variável usando o escopo de bloco em JavaScript?",
                        answers: [
                            { text: "let", isCorrect: true },
                            { text: "var", isCorrect: false },
                            { text: "const", isCorrect: false },
                            { text: "variable", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual método é usado para remover o último elemento de um array?",
                        answers: [
                            { text: "pop()", isCorrect: true },
                            { text: "shift()", isCorrect: false },
                            { text: "remove()", isCorrect: false },
                            { text: "delete()", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual é a maneira correta de definir uma função anônima?",
                        answers: [
                            { text: "const minhaFuncao = function() {}", isCorrect: true },
                            { text: "function minhaFuncao = () {}", isCorrect: false },
                            { text: "minhaFuncao() = function {}", isCorrect: false },
                            { text: "function = minhaFuncao() {}", isCorrect: false }
                        ]
                    },
                    {
                        question: "Como você acessa o valor de uma propriedade de um objeto em JavaScript?",
                        answers: [
                            { text: "objeto.propriedade", isCorrect: true },
                            { text: "objeto.'propriedade'", isCorrect: false },
                            { text: "objeto.propriedade()", isCorrect: false },
                            { text: "objeto::propriedade", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual é a diferença entre '==' e '===' em JavaScript?",
                        answers: [
                            { text: "'==' compara valores, enquanto '===' compara valores e tipos", isCorrect: true },
                            { text: "'==' é mais rápido que '===' ", isCorrect: false },
                            { text: "'==' e '===' são iguais", isCorrect: false },
                            { text: "'===' não existe em JavaScript", isCorrect: false }
                        ]
                    }
                ]
            }
        ]
    },
    {
        level: 3, // Nível 3 (Gold)
        questions: [
            {
                completed: false,
                score: 0,
                quests: [
                    {
                        question: "Qual atributo é usado para definir uma URL de redirecionamento em um link?",
                        answers: [
                            { text: "href", isCorrect: true },
                            { text: "src", isCorrect: false },
                            { text: "link", isCorrect: false },
                            { text: "url", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual tag HTML é usada para incluir um vídeo?",
                        answers: [
                            { text: "<video>", isCorrect: true },
                            { text: "<media>", isCorrect: false },
                            { text: "<movie>", isCorrect: false },
                            { text: "<film>", isCorrect: false }
                        ]
                    },
                    {
                        question: "Como você cria uma lista não ordenada em HTML?",
                        answers: [
                            { text: "<ul>", isCorrect: true },
                            { text: "<ol>", isCorrect: false },
                            { text: "<list>", isCorrect: false },
                            { text: "<li>", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual tag HTML é usada para agrupar elementos de formulário?",
                        answers: [
                            { text: "<fieldset>", isCorrect: true },
                            { text: "<formgroup>", isCorrect: false },
                            { text: "<group>", isCorrect: false },
                            { text: "<container>", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual é a tag correta para criar uma área de texto em um formulário?",
                        answers: [
                            { text: "<textarea>", isCorrect: true },
                            { text: "<input type='text'>", isCorrect: false },
                            { text: "<input type='textarea'>", isCorrect: false },
                            { text: "<textbox>", isCorrect: false }
                        ]
                    }
                ]
            },
            {
                completed: false,
                score: 0,
                quests: [
                    {
                        question: "Qual propriedade CSS é usada para aplicar uma sombra a um elemento?",
                        answers: [
                            { text: "box-shadow", isCorrect: true },
                            { text: "shadow", isCorrect: false },
                            { text: "text-shadow", isCorrect: false },
                            { text: "filter", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual valor CSS é usado para criar um layout flexível?",
                        answers: [
                            { text: "display: flex;", isCorrect: true },
                            { text: "display: grid;", isCorrect: false },
                            { text: "layout: flex;", isCorrect: false },
                            { text: "flex-direction: row;", isCorrect: false }
                        ]
                    },
                    {
                        question: "Como você aplica um efeito de transição em CSS?",
                        answers: [
                            { text: "transition: propriedade duração;", isCorrect: true },
                            { text: "transition: duração propriedade;", isCorrect: false },
                            { text: "transitions: propriedade;", isCorrect: false },
                            { text: "transition-effect: propriedade duração;", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual propriedade é usada para ajustar o espaçamento entre letras?",
                        answers: [
                            { text: "letter-spacing", isCorrect: true },
                            { text: "word-spacing", isCorrect: false },
                            { text: "line-height", isCorrect: false },
                            { text: "spacing", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual é o efeito do valor 'opacity' em um elemento?",
                        answers: [
                            { text: "Controla a transparência do elemento", isCorrect: true },
                            { text: "Controla a largura do elemento", isCorrect: false },
                            { text: "Controla a altura do elemento", isCorrect: false },
                            { text: "Controla o tamanho da fonte", isCorrect: false }
                        ]
                    }
                ]
            },
            {
                completed: false,
                score: 0,
                quests: [
                    {
                        question: "Qual é o método usado para adicionar um elemento ao final de um array?",
                        answers: [
                            { text: "push()", isCorrect: true },
                            { text: "add()", isCorrect: false },
                            { text: "append()", isCorrect: false },
                            { text: "insert()", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
                        answers: [
                            { text: "'null' é um valor definido, 'undefined' indica que uma variável não foi inicializada", isCorrect: true },
                            { text: "'null' é o mesmo que 'undefined'", isCorrect: false },
                            { text: "'undefined' é um valor definido, 'null' indica que não existe valor", isCorrect: false },
                            { text: "Não há diferença entre os dois", isCorrect: false }
                        ]
                    },
                    {
                        question: "Como você cria uma função anônima em JavaScript?",
                        answers: [
                            { text: "() => {}", isCorrect: true },
                            { text: "function{} ()", isCorrect: false },
                            { text: "function anonymous() {}", isCorrect: false },
                            { text: "function: () {}", isCorrect: false }
                        ]
                    },
                    {
                        question: "O que a palavra-chave 'this' refere-se em uma função de objeto?",
                        answers: [
                            { text: "O objeto que invoca a função", isCorrect: true },
                            { text: "Sempre refere-se ao objeto global", isCorrect: false },
                            { text: "Um objeto específico passado como argumento", isCorrect: false },
                            { text: "O próprio objeto da função", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual é o método usado para transformar um array em uma string?",
                        answers: [
                            { text: "join()", isCorrect: true },
                            { text: "split()", isCorrect: false },
                            { text: "concat()", isCorrect: false },
                            { text: "string()", isCorrect: false }
                        ]
                    }
                ]
            }
        ]
    },
    {           
        level: 4, // Nível 4 (Platinum)
        questions: [
            {
                completed: false,
                score: 0,
                quests: [
                    {
                        question: "Qual atributo HTML é usado para especificar a linguagem de um documento?",
                        answers: [
                            { text: "lang", isCorrect: true },
                            { text: "language", isCorrect: false },
                            { text: "type", isCorrect: false },
                            { text: "charset", isCorrect: false }
                        ]
                    },
                    {
                        question: "Como você define uma área clicável em uma imagem usando HTML?",
                        answers: [
                            { text: "<map>", isCorrect: true },
                            { text: "<area>", isCorrect: false },
                            { text: "<image>", isCorrect: false },
                            { text: "<imgmap>", isCorrect: false }
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
                        question: "Qual tag HTML é usada para criar uma linha horizontal?",
                        answers: [
                            { text: "<hr>", isCorrect: true },
                            { text: "<line>", isCorrect: false },
                            { text: "<br>", isCorrect: false },
                            { text: "<separator>", isCorrect: false }
                        ]
                    },
                    {
                        question: "Como você especifica que um elemento deve ser exibido como um bloco em HTML?",
                        answers: [
                            { text: "<div>", isCorrect: true },
                            { text: "<span>", isCorrect: false },
                            { text: "<inline>", isCorrect: false },
                            { text: "<block>", isCorrect: false }
                        ]
                    }
                ]
            },
            {
                completed: false,
                score: 0,
                quests: [
                    {
                        question: "Qual propriedade CSS é usada para definir a opacidade de um elemento?",
                        answers: [
                            { text: "opacity", isCorrect: true },
                            { text: "transparency", isCorrect: false },
                            { text: "visibility", isCorrect: false },
                            { text: "filter", isCorrect: false }
                        ]
                    },
                    {
                        question: "Como você aplica uma sombra ao texto usando CSS?",
                        answers: [
                            { text: "text-shadow", isCorrect: true },
                            { text: "shadow-text", isCorrect: false },
                            { text: "box-shadow", isCorrect: false },
                            { text: "font-shadow", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual propriedade CSS é usada para controlar o alinhamento de um elemento flexível?",
                        answers: [
                            { text: "align-items", isCorrect: true },
                            { text: "justify-content", isCorrect: false },
                            { text: "flex-align", isCorrect: false },
                            { text: "align-content", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual valor da propriedade 'position' fixa um elemento em relação à janela de visualização?",
                        answers: [
                            { text: "fixed", isCorrect: true },
                            { text: "absolute", isCorrect: false },
                            { text: "relative", isCorrect: false },
                            { text: "sticky", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual é a função da propriedade 'overflow' em CSS?",
                        answers: [
                            { text: "Controlar o que acontece quando o conteúdo excede o tamanho de um elemento", isCorrect: true },
                            { text: "Definir a altura de um elemento", isCorrect: false },
                            { text: "Adicionar margens ao redor de um elemento", isCorrect: false },
                            { text: "Definir a largura de um elemento", isCorrect: false }
                        ]
                    }
                ]
            },
            {
                completed: false,
                score: 0,
                quests: [
                    {
                        question: "Qual método é usado para converter um objeto JavaScript em uma string JSON?",
                        answers: [
                            { text: "JSON.stringify()", isCorrect: true },
                            { text: "JSON.parse()", isCorrect: false },
                            { text: "JSON.convert()", isCorrect: false },
                            { text: "JSON.object()", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual método do Array é usado para inverter a ordem dos elementos?",
                        answers: [
                            { text: "reverse()", isCorrect: true },
                            { text: "invert()", isCorrect: false },
                            { text: "flip()", isCorrect: false },
                            { text: "turn()", isCorrect: false }
                        ]
                    },
                    {
                        question: "Como você pode fazer um valor padrão para um parâmetro de função?",
                        answers: [
                            { text: "function func(param = defaultValue) {}", isCorrect: true },
                            { text: "function func(param : defaultValue) {}", isCorrect: false },
                            { text: "function func(param, defaultValue) {}", isCorrect: false },
                            { text: "function func(param | defaultValue) {}", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual é a função do método 'reduce()' em arrays?",
                        answers: [
                            { text: "Reduzir o array a um único valor", isCorrect: true },
                            { text: "Criar um novo array", isCorrect: false },
                            { text: "Filtrar elementos do array", isCorrect: false },
                            { text: "Ordenar elementos do array", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual é o resultado de 'typeof NaN' em JavaScript?",
                        answers: [
                            { text: "'number'", isCorrect: true },
                            { text: "'NaN'", isCorrect: false },
                            { text: "'undefined'", isCorrect: false },
                            { text: "'object'", isCorrect: false }
                        ]
                    }
                ]
            }
        ]
    },
    {
        level: 5, // Nível 5 (Diamond)
        questions: [
            {
                completed: false,
                score: 0,
                quests: [
                    {
                        question: "O que são 'data attributes' em HTML?",
                        answers: [
                            { text: "Atributos personalizados que começam com 'data-'", isCorrect: true },
                            { text: "Atributos que definem a aparência de um elemento", isCorrect: false },
                            { text: "Atributos que armazenam informações de estilo", isCorrect: false },
                            { text: "Atributos de acessibilidade", isCorrect: false }
                        ]
                    },
                    {
                        question: "O que é a semântica em HTML?",
                        answers: [
                            { text: "A maneira como as tags HTML transmitem significado", isCorrect: true },
                            { text: "Um método de estilização", isCorrect: false },
                            { text: "Uma técnica de otimização de SEO", isCorrect: false },
                            { text: "Um tipo de script", isCorrect: false }
                        ]
                    },
                    {
                        question: "O que faz o elemento &ltiframe&gt?",
                        answers: [
                            { text: "Incorpora outro documento HTML dentro do atual", isCorrect: true },
                            { text: "Exibe imagens", isCorrect: false },
                            { text: "Define uma nova página", isCorrect: false },
                            { text: "Cria um link para um arquivo", isCorrect: false }
                        ]
                    },
                    {
                        question: "O que faz a tag &ltnoscript&gt?",
                        answers: [
                            { text: "Exibe conteúdo alternativo se o JavaScript estiver desativado", isCorrect: true },
                            { text: "Cria um script que não pode ser executado", isCorrect: false },
                            { text: "Adiciona scripts a uma página", isCorrect: false },
                            { text: "Define o estilo para scripts", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual é a finalidade da tag &ltfooter&gt?",
                        answers: [
                            { text: "Define um rodapé para o documento", isCorrect: true },
                            { text: "Cria um novo layout", isCorrect: false },
                            { text: "Insere imagens", isCorrect: false },
                            { text: "Exibe o conteúdo principal", isCorrect: false }
                        ]
                    },
                ]
            },
            {
                completed: false,
                score: 0,
                quests: [
                    {
                        question: "O que é a propriedade 'z-index'?",
                        answers: [
                            { text: "Controla a ordem de empilhamento de elementos sobrepostos", isCorrect: true },
                            { text: "Define a largura de um elemento", isCorrect: false },
                            { text: "Aplica um efeito de transição", isCorrect: false },
                            { text: "Controla a opacidade de um elemento", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual a função do seletor '::after' no CSS?",
                        answers: [
                            { text: "Insere conteúdo após um elemento", isCorrect: true },
                            { text: "Altera a cor de fundo", isCorrect: false },
                            { text: "Cria um novo elemento", isCorrect: false },
                            { text: "Remove conteúdo de um elemento", isCorrect: false }
                        ]
                    },
                    {
                        question: "O que é Flexbox?",
                        answers: [
                            { text: "Um modelo de layout para distribuir espaço entre itens em um contêiner", isCorrect: true },
                            { text: "Uma propriedade para estilizar texto", isCorrect: false },
                            { text: "Um tipo de animação CSS", isCorrect: false },
                            { text: "Um seletor CSS", isCorrect: false }
                        ]
                    },
                    {
                        question: "O que faz a propriedade 'display: grid;'?",
                        answers: [
                            { text: "Ativa o layout de grid para o elemento", isCorrect: true },
                            { text: "Oculta o elemento", isCorrect: false },
                            { text: "Altera o formato do texto", isCorrect: false },
                            { text: "Ajusta o tamanho do elemento", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual é a finalidade do seletor ':hover'?",
                        answers: [
                            { text: "Estilizar um elemento quando o mouse está sobre ele", isCorrect: true },
                            { text: "Estilizar um elemento ao ser clicado", isCorrect: false },
                            { text: "Aplicar estilos a todos os elementos", isCorrect: false },
                            { text: "Definir um estilo padrão para um elemento", isCorrect: false }
                        ]
                    }
                ]
            },
            {
                completed: false,
                score: 0,
                quests: [
                    {
                        question: "Qual é a diferença entre 'call()' e 'apply()'?",
                        answers: [
                            { text: "'call()' passa argumentos separadamente; 'apply()' passa um array de argumentos", isCorrect: true },
                            { text: "'call()' não muda o contexto; 'apply()' muda", isCorrect: false },
                            { text: "Ambos são iguais", isCorrect: false },
                            { text: "'call()' cria um novo objeto; 'apply()' não", isCorrect: false }
                        ]
                    },
                    {
                        question: "O que faz o método 'setTimeout'?",
                        answers: [
                            { text: "Executa uma função após um atraso especificado", isCorrect: true },
                            { text: "Executa uma função imediatamente", isCorrect: false },
                            { text: "Repete uma função em intervalos específicos", isCorrect: false },
                            { text: "Cancela uma função", isCorrect: false }
                        ]
                    },
                    {
                        question: "Como você pode prevenir o comportamento padrão de um evento?",
                        answers: [
                            { text: "event.preventDefault()", isCorrect: true },
                            { text: "event.stopPropagation()", isCorrect: false },
                            { text: "return false", isCorrect: false },
                            { text: "stopDefault()", isCorrect: false }
                        ]
                    },
                    {
                        question: "O que é um 'Promise.all()'?",
                        answers: [
                            { text: "Uma função que executa várias promessas em paralelo", isCorrect: true },
                            { text: "Uma função que retorna uma única promessa", isCorrect: false },
                            { text: "Uma técnica para encadear promessas", isCorrect: false },
                            { text: "Uma função que aguarda uma promessa ser resolvida", isCorrect: false }
                        ]
                    },
                    {
                        question: "Qual é a diferença entre 'let' e 'var'?",
                        answers: [
                            { text: "'let' tem escopo de bloco; 'var' tem escopo de função", isCorrect: true },
                            { text: "'let' é global; 'var' é local", isCorrect: false },
                            { text: "Ambos são iguais", isCorrect: false },
                            { text: "'let' não pode ser redeclarado; 'var' pode", isCorrect: false }
                        ]
                    }
                ]
            }
        ]
    }
]