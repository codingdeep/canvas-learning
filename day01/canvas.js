let canvas, ctx, w, h, count, particles;

function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    particles = [];
    resizeReset();
    animationLoop();
}

function resizeReset(){
    w = canvas.width = window.innerWidth;
    h = canvs.height = window.innerHeight;
    
    let x = w/2;
    let y = h/2;
    let size = 5;
    let color = 'red';
    for(let i = 0; i < 10; i++){
        particles.push(x, y, size, color);
    }
}

function animationLoop(){
    ctx.clearReact(0,0,w,h);
    drawParticles();
    requestAnimationFrame(animationLoop)
}


function drawParticles (){
    particles.forEach((item)=>{
        item.update();
        item.draw();
    })
}


class Particle{
    constructor(x,y,size,color){
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }
    update(){

    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

window.addEventListener('load', init);
window.addEventListener('resize',resizeReset)