let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//sol
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(285,100,40,0,2*Math.PI);
ctx.fill();
ctx.closePath();

//calçada
ctx.beginPath();
ctx.fillStyle = 'gray';
ctx.fillRect(0,300,400,150);
ctx.closePath();

//casa
ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(150,200,90,100);
ctx.closePath();

//janela1
ctx.beginPath();
ctx.fillStyle = 'lightskyblue';
ctx.fillRect(160,225,28,28);
ctx.closePath();

//janela2
ctx.beginPath();
ctx.fillStyle = 'lightskyblue';
ctx.fillRect(202,225,28,28);
ctx.closePath();

//porta
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(188,255,14,45);
ctx.closePath();

//telhado
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgb(226,114,91)';
ctx.moveTo(150,200);
ctx.lineTo(195,150);
ctx.lineTo(240,200);
ctx.fill();
ctx.closePath();

//arvore1
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(70,230,25,0,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(63,255,14,45);
ctx.closePath();

//arvore2
ctx.beginPath();
ctx.fillStyle = 'green';
ctx.arc(365,280,25,0,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(358,305,14,45);
ctx.closePath();

//agua

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'rgba(81, 148, 224, 1)';
ctx.moveTo(0,300);
ctx.lineTo(63,300);
ctx.lineTo(63,350);
ctx.lineTo(150,350);
ctx.lineTo(150,400);
ctx.lineTo(0,400)
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'rgba(81, 148, 224, 1)';
ctx.arc(0,300,63,0,2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'rgba(81, 148, 224, 1)';
ctx.arc(150,400,50,0,2*Math.PI);
ctx.fill();
ctx.closePath();

let canvas2 = document.getElementById('canvas2');
let ctx2 = canvas2.getContext('2d');

//linha azul
ctx2.beginPath();
ctx2.lineWidth = 1.5;
ctx2.strokeStyle = 'blue';
ctx2.moveTo(0,0);
ctx2.lineTo(200,200);
ctx2.stroke();
ctx2.closePath();

//linha vermelha
ctx2.beginPath();
ctx2.lineWidth = 1.5;
ctx2.strokeStyle = 'red';
ctx2.moveTo(400,0);
ctx2.lineTo(200,200);
ctx2.stroke();
ctx2.closePath();

//quadrado azul
ctx2.beginPath();
ctx2.fillStyle = 'blue';
ctx2.fillRect(0,0,60,60);
ctx2.closePath();

//quadrado vermelho
ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.fillRect(340,0,60,60);
ctx2.closePath();

//quadrado vermelho centro
ctx2.beginPath();
ctx2.fillStyle = 'red';
ctx2.fillRect(145,200,55,55);
ctx2.closePath();

//quadrado aqua
ctx2.beginPath();
ctx2.fillStyle = 'aqua';
ctx2.fillRect(0,160,40,80);
ctx2.closePath();

//quadrado aqua2
ctx2.beginPath();
ctx2.fillStyle = 'aqua';
ctx2.fillRect(360,180,40,40);
ctx2.closePath();

//escada amarela
ctx2.beginPath();
ctx2.lineWidth = 1.5;
ctx2.fillStyle = 'yellow';
ctx2.moveTo(0,320);
ctx2.lineTo(40,320);
ctx2.lineTo(40,360);
ctx2.lineTo(80,360);
ctx2.lineTo(80,400);
ctx2.lineTo(0,400);
ctx2.fill();
ctx2.closePath();

//escada preta
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'black';
ctx2.moveTo(400,320);
ctx2.lineTo(360,320);
ctx2.lineTo(360,360);
ctx2.lineTo(320,360);
ctx2.lineTo(320,400);
ctx2.lineTo(400,400);
ctx2.fill();
ctx2.closePath();

//arco meio
ctx2.beginPath();
ctx2.lineWidth = 1.5;
ctx2.strokeStyle = 'green';
ctx2.arc(200,200,80,1*Math.PI,2*Math.PI);
ctx2.stroke();
ctx2.closePath();

//arco meio esquerda
ctx2.beginPath();
ctx2.lineWidth = 1.5;
ctx2.strokeStyle = 'green';
ctx2.arc(200,200,105,1*Math.PI,1.25*Math.PI);
ctx2.stroke();
ctx2.closePath();

//arco meio direita
ctx2.beginPath();
ctx2.lineWidth = 1.5;
ctx2.strokeStyle = 'green';
ctx2.arc(200,200,105,1.75*Math.PI,2*Math.PI);
ctx2.stroke();
ctx2.closePath();

//circulo aqua meio
ctx2.beginPath();
ctx2.lineWidth = 1.5;
ctx2.fillStyle = 'aqua';
ctx2.strokeStyle = 'blue';
ctx2.arc(200,150,20,0,2.5*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//arco aqua inferior
ctx2.beginPath();
ctx2.lineWidth = 1.5;
ctx2.fillStyle = 'aqua';
ctx2.strokeStyle = 'green';
ctx2.arc(200,400,60,1*Math.PI,2.5*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath();

//arco esquerdo inferior
ctx2.beginPath();
ctx2.lineWidth = 1.5;
ctx2.strokeStyle = 'green';
ctx2.arc(200,400,105,1*Math.PI,1.5*Math.PI);
ctx2.stroke();
ctx2.closePath();

//arco direita inferior
ctx2.beginPath();
ctx2.lineWidth = 1.5;
ctx2.strokeStyle = 'green';
ctx2.arc(200,400,82,1.5*Math.PI,2*Math.PI);
ctx2.stroke();
ctx2.closePath();

//circulo amarelo esquerda
ctx2.beginPath();
ctx2.lineWidth = 1.5;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(95,295,20,0,2.5*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath()

////circulo amarelo direita
ctx2.beginPath();
ctx2.lineWidth = 1.5;
ctx2.fillStyle = 'yellow';
ctx2.strokeStyle = 'green';
ctx2.arc(305,295,20,0,2.5*Math.PI);
ctx2.fill();
ctx2.stroke();
ctx2.closePath()

//linha cinza
ctx2.beginPath();
ctx2.lineWidth = 1.5;
ctx2.strokeStyle = 'grey';
ctx2.moveTo(200,200);
ctx2.lineTo(200,340);
ctx2.stroke();
ctx2.closePath();

//linha verde
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.moveTo(0,200);
ctx2.lineTo(400,200);
ctx2.stroke();
ctx2.closePath();

//linha preta
ctx2.beginPath();
ctx2.lineWidth = 3;
ctx2.strokeStyle = 'black';
ctx2.moveTo(0,0);
ctx2.lineTo(400,0);
ctx2.lineTo(400,400);
ctx2.lineTo(0,400);
ctx2.lineTo(0,0)
ctx2.stroke();
ctx2.closePath();

//canvas
ctx2.beginPath();
ctx2.lineWidth = 0.5;
ctx2.fillStyle = 'black';
ctx2.font = "30px Arial"
ctx2.textAlign = "center";
ctx2.fillText("Canvas",200,65);
ctx2.closePath();