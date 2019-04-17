$(function () {
    $('#contatoForm').on('submit', function () {
        var nome = $(this).find('input[name=nome]'), nome = nome.val();
        var email = $(this).find('input[name=email]'), email = email.val();
        var texto = $(this).find('textarea[name=Body]'), texto = texto.val();
        $(this).find('input[name=Body]').attr('value', texto);
        window.location = 'mailto:' + "escolasonhomeu@gmail.com" + '?subject=' + "Informações Escola Meu Sonho" + '&body=' + texto;
    });
});

$('#up').each(function () {
    $(this).click(function () {
        $(window.opera ? 'html' : 'html, body').animate({
            scrollTop: 0
        }, 'slow');
    });
});