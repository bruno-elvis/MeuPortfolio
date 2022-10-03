;(function ($) {
    "use strict";

    // Scrolling da Navbar e dinamica do botão voltar ao inicio "back to top"
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
            $('.back-to-top').fadeIn('slow');
        } else {
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

    botaoLerMais.addEventListener('click', function () {
        if (paragrafo.innerHTML = '...')  paragrafo.innerHTML = 'Sou criativo, automotivado, aprendo com facilidade, muito organizado, além da alta capacidade de adaptação ao ambiente e resiliência. Penso que os melhores resultados, independente do projeto, descendem da dedicação e motivação do colaborador, alinhado aos interesses mútuos, os meus tem base na voracidade de aprender e fascínio em transformar informação em valor através da tecnologia. Tenho 1+ ano de experiência como desenvolvedor Full Stack (Java + HTML5, CSS3, JavaScript,  Node.js, dentre outras tecnologias), tenho facilidade em trabalhar com a Stack JavaScript (no backend e no frontend) e caminho para dominar os principais frameworks nos próximos anos aplicando em projetos próprios.';
    });

    // Integração com API externa para registro de número de downloads do arquivo
    botaoDownloadCurriculo.addEventListener('click', async function () {
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
    (async () => {
        const consultaAPI = await fetch(`https://sequelize-crud-postgresql.herokuapp.com/counts`);
        const respostaAPI = await consultaAPI.json();
        console.log(`Resposta GET: \n Contador: ${ await JSON.stringify(respostaAPI)}`);

    })();
    
})(jQuery);

