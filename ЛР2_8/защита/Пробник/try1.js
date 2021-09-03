const card=document.querySelector('.card__inner');
card.addEventListener('click',function(){
    card.classList.toggle('is-flipped')
})
$(document).ready(function(){
    $('.card1').fadeOut(2);
});
// const card2=document.querySelector('.card2__inner');
// card2.addEventListener('click',function(){
//     card2.classList.toggle('is-flipped')
// })
$(document).ready(function(){
    $('.i1').click(function(){
        $('.menu2').css('visibility','hidden');
        $('.card1').fadeIn(2)
        // css("visibility",'visible');
    })
})

$(document).ready(function(){
    $('.m-btn2').click(function(){
        $('.menu2').css("visibility",'visible');
        $('.card1').fadeOut(200);
        // css("visibility",'hidden');
    })
})
// $(document).ready(function(){
//     $('.i2').click(function(){
//         $('.menu2').css('display','none');
//         $('.card2').css("visibility",'visible');
//     })
// })
// $(document).ready(function(){
//     $('.i3').click(function(){
//         $('.menu2').css('display','none');
//         $('.card3').css("visibility",'visible');
//     })
// })
// $(document).ready(function(){
//     $('.i4').click(function(){
//         $('.menu2').css('display','none');
//         $('.card4').css("visibility",'visible');
//     })
// })

// $(document).ready(function(){
//     $('.i1').click(function(){
//         $('.menu2').fadeOut(2);
//         $('.blocks').css('visibility',"visible").fadeIn(600);
//     })
// })