$(document).ready(()=> {
$('#open-bar').click(()=> {
    $('#open-bar').hide();
    $('#close-bar').show();
    $('.mobile-menu .slide-nav').css('left', '0');
});
$('#close-bar').click(()=> {
    $('#open-bar').show();
    $('#close-bar').hide();
    $('.mobile-menu .slide-nav').css('left', '-120%');
})
});

console.log('connected js with HTML');