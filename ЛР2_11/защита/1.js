$(document).ready(function(){
    $('.img1').mouseover(function(){
        $(this).css('transform','rotate(45deg)')
    })
    $('.img1').mouseout(function(){
        $(this).css('transform','rotate(0deg)')
    })
})