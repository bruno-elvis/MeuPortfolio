;(function ($) {
    "use strict";
    const currentPage = window.location.href;

    // Scrolling da Navbar e dinamica do botão voltar ao inicio "back to top"
    $(window).scroll(function () {

        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
            $('.back-to-top').fadeIn('slow');
        } else if ($(this).scrollTop() > 200 && currentPage.indexOf('conteudo') < 0) {
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
        const secaoHabilidades = itensNavBar.find(function(a) {return a.hash === '#habilidades'});
        const secaoConteudo = itensNavBar.find(function(a) {return a.hash === '#conteudo'});
        const secaoContato = itensNavBar.find(function(a) {return a.hash === '#contato'});

        // Animação da Barra de progresso das habilidades
        if ($(this).scrollTop() > 2700 || $(this).scrollTop() >= 2093) {
            progressBarsTecnSkills.forEach(function (div){
                div.style.width = `${div.getAttribute('aria-valuenow')}%`;
            });
        };

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

        } else if ($(this).scrollTop() >= 2353 && $(this).scrollTop() < 2838){
            itensNavBar.forEach(function(a) {(a.classList.contains('active')) && a.classList.remove('active');});
            secaoHabilidades.classList.add('active');

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

    // Evento do botão de ler mais na seção 'sobre'
    const botaoLerMais = document.querySelector('#sobre > div > div.row.align-items-center > div.col-lg-7 > a:nth-child(5)');
    const paragrafo = document.querySelector('#sobre > div > div.row.align-items-center > div.col-lg-7 > p');

    if (currentPage.indexOf('index') > 0) botaoLerMais.addEventListener('click', function () {
        if (paragrafo.innerHTML = '...')  paragrafo.innerHTML = 'Criativo, automotivado, facilidade no aprendizado, resiliente para situações e ambientes diversos. Penso que os melhores resultados, independente do projeto, descendem da dedicação e motivação do colaborador, através do alinhamento de ideias e interesses, os meus tem base na voracidade de aprender e fascínio em transformar informação em valor através da tecnologia. Tenho 1+ ano de experiência como desenvolvedor FullStack, com sólidos conhecimentos na linguagem JavaScript, caminho para dominar os principais frameworks da Stack nos próximos meses, aplicando em projetos próprios e cursos de especialização. Atualmente participo de Bootcamps, cursos de especialização na área de Desenvolvimento de Software e sigo ativo na comunidade, a fim de validar meus conhecimentos e melhorar metodologias de desenvolvimento em meus trabalhos.';
    });

    // Integração com API externa para registro de número de downloads do arquivo
    if (currentPage.indexOf('index') > 0) botaoDownloadCurriculo.addEventListener('click', async function () {
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
    
    // Vincular evento ao botão de "ler mais" para definição de ocnteúdo do post
    listPostButton.forEach((postButton) => {
        postButton.addEventListener('click', function(event){
            localStorage.setItem('post', event.target.parentElement.id);

        });

    });
    
})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    let idPost = localStorage.getItem('post');

    if (document.location.href.indexOf('conteudo') > 0) document.getElementById('conteudo').innerHTML = JSON.parse(localStorage.getItem('posts'))[idPost];

});