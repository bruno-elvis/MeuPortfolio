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
        }
    });
    
})(jQuery);

