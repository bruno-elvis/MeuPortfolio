;(function ($) {
    "use strict";
    //const currentPage = window.location.href;

    // Scrolling da Navbar e dinamica do botão voltar ao inicio "back to top"
    $(window).scroll(function () {

        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
            $('.back-to-top').fadeIn('slow');
        } else if ($(this).scrollTop() > 200) {
            $('.navbar').fadeOut('slow').css('display', 'none');
            $('.back-to-top').fadeOut('slow');
        };

        // Esconder botão de indicatico de scroll após proximidade do fim da page
        ($(this).scrollTop() >= 3900) ? $('.scroll-to-bottom').fadeOut('slow') : $('.scroll-to-bottom').fadeIn('slow');
    });

    // Dinâmica da barra de navegação "nav-bar" e das barras de progresso "progress bars" animadas
    $(window).scroll(function () {
        const itensNavBar = [...document.querySelectorAll('.nav-item')];
        const progressBarsTecnSkills = document.querySelectorAll('.progress .progress-bar');

        const secaoHome = itensNavBar.find(function(a) {return a.hash === '#home'});
        const secaoSobre = itensNavBar.find(function(a) {return a.hash === '#sobre'});
        const secaoQualificacoes = itensNavBar.find(function(a) {return a.hash === '#qualificacao'});
        const secaoConteudo = itensNavBar.find(function(a) {return a.hash === '#conteudo'});
        const secaoContato = itensNavBar.find(function(a) {return a.hash === '#contato'});

        // // Animação da Barra de progresso das habilidades
        // if ($(this).scrollTop() > 2700 || $(this).scrollTop() >= 2093) {
        //     progressBarsTecnSkills.forEach(function (div){
        //         div.style.width = `${div.getAttribute('aria-valuenow')}%`;
        //     });
        // };

        // Dinamismo do menu em relação a position da page para marcar a opção correspondente
        if ($(this).scrollTop() >= 0 && $(this).scrollTop() < 717) {
            itensNavBar.forEach(function(a) {(a.classList.contains('active')) && a.classList.remove('active');});
            secaoHome.classList.add('active');

        } else if ($(this).scrollTop() >= 717 && $(this).scrollTop() < 1585) {
            itensNavBar.forEach(function(a) {(a.classList.contains('active')) && a.classList.remove('active');});
            secaoSobre.classList.add('active');

        } else if ($(this).scrollTop() >= 1585 && $(this).scrollTop() < 2353){
            itensNavBar.forEach(function(a) {(a.classList.contains('active')) && a.classList.remove('active');});
            secaoQualificacoes.classList.add('active');

        // } else if ($(this).scrollTop() >= 2353 && $(this).scrollTop() < 2838){
        //     itensNavBar.forEach(function(a) {(a.classList.contains('active')) && a.classList.remove('active');});
        //     secaoHabilidades.classList.add('active');

        } else if ($(this).scrollTop() >= 2838 && $(this).scrollTop() < 3545){
            itensNavBar.forEach(function(a) {(a.classList.contains('active')) && a.classList.remove('active');});
            secaoConteudo.classList.add('active');

        } else if ($(this).scrollTop() >= 3545){
            itensNavBar.forEach(function(a) {(a.classList.contains('active')) && a.classList.remove('active');});
            secaoContato.classList.add('active');
        };
    });

    // Efeito no botão contatar, contraste com icone do whatsapp
    const botaoContatar = document.querySelector('#navbarCollapse > div:nth-child(2) > a');
    const imgBotaoContatar = document.querySelector('#navbarCollapse > div:nth-child(2) > a > img');
    const botaoDownloadCurriculo = document.querySelector('#home > div > div > div.col-lg-7.text-center.text-lg-left > div.d-flex.align-items-center.justify-content-center.justify-content-lg-start > a.btn.btn-outline-light.mr-5');

    botaoContatar.addEventListener('mouseover', function () {
        (imgBotaoContatar.style.filter) && imgBotaoContatar.style.removeProperty('filter');
    });

    botaoContatar.addEventListener('mouseout', function () {
        if (!imgBotaoContatar.style.filter) imgBotaoContatar.style.filter = 'invert()';
    });

    // Integração com API externa para registro de número de downloads do arquivo
    botaoDownloadCurriculo?.addEventListener('click', async function () {
        //GET
        const consultaAPI = await fetch(`https://sequelize-crud-postgresql.herokuapp.com/counts`);
        const respostaAPI = await consultaAPI.json();
        console.log(`Resposta GET: \n Contador: ${ await JSON.stringify(respostaAPI) }`);

        //PUT
        const postCountAPI = await fetch('https://sequelize-crud-postgresql.herokuapp.com/incrementcount', { method: 'POST', headers: { 'Content-Type': 'application/json'}});
        const resPostAPI = await postCountAPI.json();
        console.log(`Resposta PUT: \n ${ await JSON.stringify(resPostAPI) }`);

    });

    // Apresentar count ao iniciar page
    /*(async () => {
        const consultaAPI = await fetch(`https://sequelize-crud-postgresql.herokuapp.com/counts`);
        const respostaAPI = await consultaAPI.json();
        console.log(`Resposta GET: \n Contador: ${ await JSON.stringify(respostaAPI)}`);

    })();*/
    
})(jQuery);

if (localStorage.getItem('post') === 'main' || (localStorage.getItem('post') === null)) localStorage.setItem('post', 'main');

//Definir conteúdo dos posts
localStorage.setItem('posts', JSON.stringify({
    1: `<h2 style="color: blue;">Docker e suas vantagens</h2>
    <p>Docker é uma plataforma de código aberto que automatiza o processo de implantação, escalabilidade e gerenciamento de aplicativos dentro de contêineres. Ele permite que você empacote um aplicativo com todas as suas dependências em uma unidade padronizada para desenvolvimento de software.</p>
    <p>As principais vantagens do Docker incluem:</p>
    <ul>
        <li>Portabilidade: os contêineres Docker podem ser executados em qualquer máquina que tenha o Docker instalado, independentemente do sistema operacional.</li>
        <li>Eficiência: os contêineres Docker são leves e rápidos. Eles iniciam quase instantaneamente e usam uma fração dos recursos de memória e CPU que uma máquina virtual usaria.</li>
        <li>Isolamento: cada contêiner Docker é isolado dos outros, o que aumenta a segurança e permite que você execute várias versões do mesmo software simultaneamente.</li>
    </ul>
    <img src="../img/docker.png" alt="Docker logo" style="width: 200px; height: auto;">`, 

    2: `<h2 style="text-align: center;">Implementação da API de SLM com Llama</h2>
    <img src="https://ollama.com/public/ollama.png" style="filter: contrast(0.5);">
    <p>
        A implementação da API de SLM (Service Level Management) com Llama permite gerenciar e otimizar efetivamente os níveis de serviço em uma variedade de ambientes de TI. Com a integração do Llama, os usuários podem aproveitar os recursos avançados de gerenciamento de serviços para monitorar, relatar e garantir os níveis de serviço acordados.
    </p>
    <p>
        A API fornece uma interface programática para interagir com o SLM, permitindo aos desenvolvedores criar, ler, atualizar e excluir registros de nível de serviço, bem como realizar outras operações relacionadas ao gerenciamento de níveis de serviço.
    </p>
    <p>
        A integração com Llama traz benefícios adicionais, incluindo a capacidade de gerenciar níveis de serviço em ambientes de nuvem híbrida, fornecer visibilidade em tempo real do desempenho do serviço e melhorar a eficiência operacional.
    </p>`, 

    3: `<h2 style="color: #333;">Novidades do React 18</h2>
    <svg width="150px" height="150px" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="uwu-hidden mt-4 mb-3 text-brand dark:text-brand-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor" data-darkreader-inline-fill="" style="--darkreader-inline-fill: currentColor;"></circle><g stroke="currentColor" stroke-width="1" fill="none" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
    <p style="font-size: 16px; line-height: 1.6; color: #666;">
        O React 18 está chegando com várias melhorias e novas APIs. Uma das principais adições é o <strong>automatic batching</strong>, que permite ao React preparar várias versões da sua UI ao mesmo tempo[^1^][4]. Além disso, temos a nova API <strong>startTransition</strong>, que ajuda a manter a interface do usuário responsiva durante as atualizações de estado que causam renderizações demoradas[^1^][4].
    </p>
    <p style="font-size: 16px; line-height: 1.6; color: #666;">
        Outra grande novidade é o novo renderizador de servidor de streaming com suporte integrado para <strong>React.lazy</strong>. Isso permite que você carregue componentes de maneira preguiçosa, ajudando a melhorar o desempenho da sua aplicação[^1^][4].
    </p>
    <p style="font-size: 16px; line-height: 1.6; color: #666;">
        Essas são apenas algumas das novidades do React 18. Para mais detalhes, confira a <a href="https://pt-br.legacy.reactjs.org/blog/2022/03/29/react-v18.html" style="color: #1678c2; text-decoration: none;">documentação oficial</a>.
    </p>`

}));

// vincular evento para criar o ls de identificação do post
document.addEventListener("DOMContentLoaded", function() {
    let idPost = localStorage.getItem('post');

    if (!!document.getElementById('post')) document.getElementById('post').innerHTML = JSON.parse(localStorage.getItem('posts'))[idPost];

});

// Criar lógica de população do container de posts e main
const buttonMain = document.querySelector('body > nav > a');

const divMain = document.querySelector('#containerMain');

buttonMain.addEventListener('click', function(event){
    localStorage.setItem('post', 'main');

});

function createBlogPosts() {
    // Popular lista de blogs recentes
    const listPosts = [
        {
            day: '31',
            month: 'MAI',
            title: 'Docker e suas vantagens',
            img: 'img/post_docker.png'

        },
        {
            day: '03',
            month: 'JUN',
            title: 'Implementação de modelos de I.A (SLM) via API',
            img: 'img/post_ia.png'

        },
        {
            day: '03',
            month: 'JUN',
            title: 'Novidades sobre React 18',
            img: 'img/post_react.png'

        }

    ];

    const listPotsDay = document.querySelectorAll('.col-lg-4.mb-5 h4');
    const listPostMonth = document.querySelectorAll('.col-lg-4.mb-5 small');
    const listPostTitle = document.querySelectorAll('.col-lg-4.mb-5 h5');
    const listPostImg = document.querySelectorAll('.col-lg-4.mb-5 img');
    const listPostButton = document.querySelectorAll('.col-lg-4.mb-5 a');

    function setPost(listPostElement, labelType){
        listPostElement.forEach((postElement, i) => {
            switch (i) {
            case 0:
                (labelType !== 'img') ? postElement.textContent = listPosts[i][labelType] : postElement.setAttribute('src', listPosts[i][labelType]);
                break;
            case 1:
                (labelType !== 'img') ? postElement.textContent = listPosts[i][labelType] : postElement.setAttribute('src', listPosts[i][labelType]);
            case 2:
                (labelType !== 'img') ? postElement.textContent = listPosts[i][labelType] : postElement.setAttribute('src', listPosts[i][labelType]);
                break;
            };
    
        });
    };

    setPost(listPotsDay, 'day');
    setPost(listPostMonth, 'month');
    setPost(listPostTitle, 'title');
    setPost(listPostImg, 'img');

    // Vincular evento ao botão de "ler mais" para definição de conteúdo do post
    listPostButton.forEach((postButton) => {
        postButton.addEventListener('click', function(event){
            localStorage.setItem('post', event.target.parentElement.id);

        });

    });

};

function createMain(){
    const contentMain = `
    <!-- Cabeçalho de Apresentação Inicial -->
    <div class="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style="min-height: 100vh;">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
                    <img class="img-fluid w-100 rounded-circle shadow-sm" src="https://github.com/Bruno-Elvis.png"
                        alt="Foto de Perfil de Bruno Elvis">
                </div>
                <div class="col-lg-7 text-center text-lg-left">
                    <h3 class="text-white font-weight-normal mb-3">Olá, me chamo</h3>
                    <h1 class="display-3 text-uppercase text-primary mb-2">Bruno E. P. Silva</h1>
                    <div class="typed-text d-none">Designer para WEB, Desenvolvedor WEB, Desenvolvedor Full Stack</div>
                    <div class="d-flex align-items-center justify-content-center justify-content-lg-start" style="padding-top: 1rem !important;">
                        <a href="arquivo/CurriculoBrunoEPSilva.pdf" class="btn btn-outline-light mr-5" download>Download Currículo</a>
                        <a class="btn-repo" href="https://github.com/bruno-elvis" target="_blank">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="github"
                                style="
                                    height: 50px;
                                    position: absolute;
                                    top: -7px;
                                    right: -1px;
                                    filter: invert(1);" />
                        </a>
                        <h5 class="font-weight-normal m-0 ml-4 d-none d-sm-block text-white">◀ Acessar Repositório</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Seção de Informações "Sobre" -->
    <div class="container-fluid py-5" id="sobre">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                <h1 class="display-1 text-uppercase">Sobre</h1>
                <h1 class="position-absolute text-uppercase text-primary">Sobre mim</h1>
            </div>
            <div class="row align-items-center">
                <div class="col-lg-5 pb-4 pb-lg-0">
                    <img class="img-fluid rounded w-100" src="img/about.png" alt="">
                </div>
                <div class="col-lg-7">
                    <h3 class="mb-4">Desenvolvedor WEB Full-Stack</h3>
                    <p>...</p>
                    <div class="row mb-3">
                        <div class="col-sm-6 py-2">
                            <h6>Nome: <span class="text-secondary">Bruno E. P. Silva</span></h6>
                        </div>
                        <div class="col-sm-6 py-2">
                            <h6>Nascimento: <span class="text-secondary">31 de Janeiro de 1996</span></h6>
                        </div>
                        <div class="col-sm-6 py-2">
                            <h6>Formação: <span class="text-secondary">Bacharel em Sistemas de Informação</span></h6>
                        </div>
                        <div class="col-sm-6 py-2">
                            <h6>Tempo de Experiência: <span class="text-secondary">+5 Anos</span></h6>
                        </div>
                        <div class="col-sm-6 py-2">
                            <h6>E-mail: <span class="text-secondary">brunoelvis@outlook.com.br</span></h6>
                        </div>
                        <div class="col-sm-6 py-2">
                            <h6>Localização: <span class="text-secondary">Vitória, Espírito Santo, BRA</span></h6>
                        </div>
                    </div>
                    <a href="https://wa.me/5528999522013/" target="_blank" class="btn btn-outline-primary mr-4">Contato</a>
                    <a class="btn btn-outline-primary">Ler Mais</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Seção de Qualificações Profissionais -->
    <div class="container-fluid py-5" id="qualificacao">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                <h1 class="display-1 text-uppercase">Qualificações</h1>
                <h1 class="position-absolute text-uppercase text-primary">Formação & Experiência</h1>
            </div>
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h3 class="mb-4">Minha Formação</h3>
                    <div class="border-left border-primary pt-2 pl-4 ml-2">
                        <div class="position-relative mb-4">
                            <i class="far fa-dot-circle text-primary position-absolute"
                                style="top: 2px; left: -32px;"></i>
                            <h5 class="font-weight-bold mb-1">Bacharel em Sistemas de Infomação</h5>
                            <p class="mb-2"><strong>Faculdade do ES Multivix</strong> | <small>2015 - 2019</small></p>
                            <p>Trabalho de conclusão de curso com ênfase em Ciência de Dados</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <h3 class="mb-4">Minhas Experiências</h3>
                    <div class="border-left border-primary pt-2 pl-4 ml-2">
                        <div class="position-relative mb-4">
                            <i class="far fa-dot-circle text-primary position-absolute"
                                style="top: 2px; left: -32px;"></i>
                            <h5 class="font-weight-bold mb-1">Desenvolvedor WEB Full Cycle</h5>
                            <p class="mb-2"><strong>Defensoria Pública do Estado do Espírito Santo</strong> | <small>ago. 2024 - até o momento</small></p>
                            <p>Desenvolvimento de aplicações WEB, sustentação e manutenção de integrações e sistemas internos baseadas no ecossistema Python</p>
                        </div>
                        <div class="position-relative mb-4">
                            <i class="far fa-dot-circle text-primary position-absolute"
                                style="top: 2px; left: -32px;"></i>
                            <h5 class="font-weight-bold mb-1">Desenvolvedor WEB Full Stack</h5>
                            <p class="mb-2"><strong>Hinno Technology</strong> | <small>jul. 2021 - jul. 2024</small></p>
                            <p>Desenvolvimento de aplicações WEB Multiplataforma na Área de Saúde</p>
                        </div>
                        <div class="position-relative mb-4">
                            <i class="far fa-dot-circle text-primary position-absolute"
                                style="top: 2px; left: -32px;"></i>
                            <h5 class="font-weight-bold mb-1">Analista de Suporte a Software e Implantação de Sistemas
                            </h5>
                            <p class="mb-2"><strong>Técnica Automação Comercial LTDA</strong> | <small>2019 -
                                    2021</small></p>
                            <p>Implantação de Sistemas e Suporte a Software no contexto de Automação Comercial</p>
                        </div>
                        <div class="position-relative mb-4">
                            <i class="far fa-dot-circle text-primary position-absolute"
                                style="top: 2px; left: -32px;"></i>
                            <h5 class="font-weight-bold mb-1">Estagiário de T.I.</h5>
                            <p class="mb-2"><strong>Usimed Sul Capixaba Cooperativa de Usuários de Assistência
                                    Médica</strong> | <small>2017 - 2019</small></p>
                            <p>Manutenção de Banco de Dados e Suporte a Sistemas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Seção de Artigos/Blog -->
    <div class="container-fluid pt-5" id="conteudo">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                <h1 class="display-1 text-uppercase">Blog</h1>
                <h1 class="position-absolute text-uppercase text-primary">Últimas Postagens</h1>
            </div>
            <div class="row">
                <div id="1" class="col-lg-4 mb-5">
                    <div class="position-relative mb-4">
                        <img class="img-fluid rounded w-100" src="img/blog.jpg" alt="">
                        <div class="blog-date">
                            <h4 class="font-weight-bold mb-n1">01</h4>
                            <small class="text-uppercase">Jan</small>
                        </div>
                    </div>
                    <h5 class="font-weight-medium mb-4">Artigo sobre Docker</h5>
                    <a class="btn btn-sm btn-outline-primary py-2" href="">Ler mais</a>
                </div>
                <div id="2" class="col-lg-4 mb-5">
                    <div class="position-relative mb-4">
                        <img class="img-fluid rounded w-100" src="img/blog.jpg" alt="">
                        <div class="blog-date">
                            <h4 class="font-weight-bold mb-n1">01</h4>
                            <small class="text-uppercase">Jan</small>
                        </div>
                    </div>
                    <h5 class="font-weight-medium mb-4">Este espaço receberá novidades em breve</h5>
                    <a class="btn btn-sm btn-outline-primary py-2" href="">Ler mais</a>
                </div>
                <div id="3" class="col-lg-4 mb-5">
                    <div class="position-relative mb-4">
                        <img class="img-fluid rounded w-100" src="img/blog.jpg" alt="">
                        <div class="blog-date">
                            <h4 class="font-weight-bold mb-n1">01</h4>
                            <small class="text-uppercase">Jan</small>
                        </div>
                    </div>
                    <h5 class="font-weight-medium mb-4">Este espaço receberá novidades em breve</h5>
                    <a class="btn btn-sm btn-outline-primary py-2" href="">Ler mais</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Seção Para Obter Contato -->
    <div class="container-fluid py-5" id="contato">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                <h1 class="display-1 text-uppercase">Contato</h1>
                <h1 class="position-absolute text-uppercase text-primary">Entre em contato</h1>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="contact-form text-center">
                        <div id="sucesso"></div>
                        <form name="enviarMensagem" id="contatoFormulario" novalidate="novalidate">
                            <div class="form-row">
                                <div class="control-group col-sm-6">
                                    <input type="text" class="form-control p-4" id="nome" placeholder="Seu Nome"
                                        required="required"
                                        data-validation-required-message="Por favor, informe seu nome" />
                                    <p class="help-block text-danger"></p>
                                </div>
                                <div class="control-group col-sm-6">
                                    <input type="e-mail" class="form-control p-4" id="email" placeholder="Seu E-mail"
                                        required="required"
                                        data-validation-required-message="Por favor, informe seu email" />
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control p-4" id="assunto" placeholder="Assunto"
                                    required="required"
                                    data-validation-required-message="Por favor insira um assunto" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <textarea class="form-control py-3 px-4" rows="5" id="mensagem" placeholder="Mensagem"
                                    required="required"
                                    data-validation-required-message="Por favor, insira uma mensagem"></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-outline-primary" type="submit" id="btnEnviarMensagem">Enviar
                                    Mensagem</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `;

    divMain.innerHTML = contentMain;

    // Evento do botão de ler mais na seção 'sobre'
    const botaoLerMais = document.querySelector('#sobre > div > div.row.align-items-center > div.col-lg-7 > a:nth-child(5)');
    const paragrafo = document.querySelector('#sobre > div > div.row.align-items-center > div.col-lg-7 > p');

    botaoLerMais?.addEventListener('click', function () {
        if (paragrafo.innerHTML = '...')  paragrafo.innerHTML = 'Criativo, automotivado, tenho autonomia no aprendizado, resiliente para situações e ambientes diversos. Tenho voracidade de aprender e fascínio em transformar informação em valor através da tecnologia.   Com mais de 3 anos de experiência com desenvolvimento FullStack na área da saúde, trabalhei com projetos WEB, Desktop e Mobile em todo o ciclo de vida do projeto, desde o desenvolvimento até o deploy, atendendo clientes de referência internacional na América Latina, do setor público e privado. Possuo sólidos conhecimentos na linguagem JavaScript e seu ecossistema, assim como Java e banco de dados relacionais.  Sigo ativo nas comunidades tech, e desenvolvo projeto pessoal na área de gestão de manutenção de motocicletas.';
    });

    createBlogPosts();

};

function createPostBlog(){
    const contentPostBlog = `
    <div id="post" style="border: 1px solid black; padding: 20px; margin: 65px; position: relative; top: 100px;"></div>

    <!-- Seção de Artigos/Blog -->
    <div class="container-fluid pt-5" id="post">
        <div class="container">
            <div class="position-relative d-flex align-items-center justify-content-center">
                <h1 class="display-1 text-uppercase">Blog</h1>
                <h1 class="position-absolute text-uppercase text-primary">Mais Postagens</h1>
            </div>
            <div class="row">
                <div id="1" class="col-lg-4 mb-5">
                    <div class="position-relative mb-4">
                        <div class="blog-date">
                            <h4 class="font-weight-bold mb-n1">01</h4>
                            <small class="text-uppercase">Jan</small>
                        </div>
                    </div>
                    <h5 class="font-weight-medium mb-4">Este espaço receberá novidades em breve</h5>
                    <a class="btn btn-sm btn-outline-primary py-2" href="">Ler mais</a>
                </div>
                <div id="2" class="col-lg-4 mb-5">
                    <div class="position-relative mb-4">
                        <div class="blog-date">
                            <h4 class="font-weight-bold mb-n1">01</h4>
                            <small class="text-uppercase">Jan</small>
                        </div>
                    </div>
                    <h5 class="font-weight-medium mb-4">Este espaço receberá novidades em breve</h5>
                    <a class="btn btn-sm btn-outline-primary py-2" href="">Ler mais</a>
                </div>
                <div id= "3" class="col-lg-4 mb-5">
                    <div class="position-relative mb-4">
                        <div class="blog-date">
                            <h4 class="font-weight-bold mb-n1">01</h4>
                            <small class="text-uppercase">Jan</small>
                        </div>
                    </div>
                    <h5 class="font-weight-medium mb-4">Este espaço receberá novidades em breve</h5>
                    <a class="btn btn-sm btn-outline-primary py-2" href="">Ler mais</a>
                </div>
            </div>
        </div>
    </div>
    `;

    divMain.innerHTML = contentPostBlog;

    createBlogPosts();

};

(localStorage.getItem('post') === 'main') ? createMain() : createPostBlog();