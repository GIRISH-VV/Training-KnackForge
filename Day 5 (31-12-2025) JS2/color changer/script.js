let color = document.querySelector('.color');
let wrap = document.querySelector('.wrap');
let btn = document.querySelector('.btn');

let x = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener('click', function() {
    let hexColor = '#';
    for(let i=1; i<=6; i++){
        hexColor += codeColor();
    }
    color.innerHTML = hexColor;
    wrap.style.backgroundColor = hexColor;    
});

function codeColor(){
      let  hexCode = x[Math.floor(Math.random() * x.length)];
            return hexCode;
}


