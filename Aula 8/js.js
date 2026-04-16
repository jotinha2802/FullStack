let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let retangulo1 = {
    x: 50,
    y: 10,
    altura: 10,
    largura: 50,
    cor: "red",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

let retangulo2 = {
    x: 40,
    y: 40,
    altura: 10,
    largura: 50,
    cor: "blue",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

var circulo = {
    x: 0,
    y: 0,
    raio: 50,
    cor: "blue",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x,this.y,this.raio,0,2*Math.PI);
        ctx.fill()
        ctx.closePath();
    }
}



let direção = 1
function animar(){
    ctx.clearRect(0,0,400,400)
    if(retangulo1.x == 350){
        direção= -1
    }
    if(retangulo1.x == 0){
        direção = 1
    }
    if(retangulo2.altura == 360){
        direção = -1
    }
    if(retangulo2.altura == -20){
        direção = 1
    }
    if(retangulo2.largura == 360){
        direção = -1
    }
    if(retangulo2.largura == 0){
        direção = 1
    }
    retangulo2.altura = retangulo2.altura + direção;
    retangulo2.largura = retangulo2.largura + direção;
    retangulo1.x = retangulo1.x + direção;
    retangulo1.desenha()
    retangulo2.desenha();
    circulo.desenha();
    requestAnimationFrame(animar)
}
animar();


document.addEventListener('keydown',function(evento){
    tecla = evento.key;
    console.log(tecla);
    if(tecla == 'ArrowUp')   {circulo.y = circulo.y-5}  
    if(tecla == 'ArrowDown') {circulo.y = circulo.y+5}  
    if(tecla == 'ArrowLeft') {circulo.x = circulo.x-5}  
    if(tecla == 'ArrowRight'){circulo.x = circulo.x+5}  
})
animacao();