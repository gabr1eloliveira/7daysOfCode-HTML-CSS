$(document).ready(function(){
    $('#btn-menu').on('click', function(){
        $('#navbar__mobile').toggleClass('active');
        $('#btn-menu').find('i').toggleClass('fa-x fa-bars');
    });
});