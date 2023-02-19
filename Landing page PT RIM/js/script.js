const team = document.querySelector('.team');
const jumbo = document.querySelector('.box-team .box .jumbo');
const thumbs = document.querySelectorAll('.box-team .thumbs')
team.addEventListener('click', function(e){
    if (e.target.className == 'thumbs'){
        jumbo.src = e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){
            jumbo.classList.remove('fade');
        }, 200);
    };
});