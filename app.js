const button = document.querySelector('.button');
const body =document.querySelector('body');
const colors =['red','yellow','green','tomato','gray'];
let colorIndex = 0;
body.style.backgroundColor = 'blue'
button.addEventListener('click', function(e){
e.preventDefault();
changeBackground();
});

function changeBackground(){
    colorIndex = parseInt(Math.random()*colors.length);
    body.style.backgroundColor = colors[colorIndex];
}
