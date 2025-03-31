
const body = document.querySelector('body');
const button = document.querySelector('button');
const colors =[ 'Aqua', 'orange', 'purple', 'pink', 'CadetBlue', 'LightSeaGreen', 'Wheat']

document.getElementById('click-btn').addEventListener('click', function(){
    const colorIndex=parseInt(Math.random()*colors.length);
    document.body.style.backgroundColor =colors[colorIndex];
 
})
 
document.getElementById('today-page').addEventListener('click', function(){

    window.location.href='js/main.html'

})

