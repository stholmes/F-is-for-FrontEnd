$(document).ready(function () {

    $('.circle').click(function () {
        $('.circle').removeClass('selected')
        this.classList.add('selected')
        var display_content = $(this).attr('data-content')
        $('.card').removeClass('display')
        $('#' + display_content).attr('class', 'card display')
    })



})