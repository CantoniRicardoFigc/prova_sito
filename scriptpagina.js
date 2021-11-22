function buttonSpirale() {

   var canvas = document.getElementById("CanvasSpiral"); // carico di un canvas diverso con sfondo bianco
   var ctx = canvas.getContext("2d");
   ctx.fillStyle = "white";
   ctx.fillRect(0, 0, 200, 200);

   var colors = ["red","blue","green","yellow"]; // modo casuale colore del fillStyle del Canvas
   var randomColor = colors[Math.floor(Math.random()*colors.length)]; 
    
   let x = 0;
   let y = 0;
   let index = 300;

   while (index > 0){
      index -= 20;
      for (let i = 0; i < index; i += 20){
         ctx.fillRect(x, y, 10, 10)
         ctx.fillStyle = "black";

         x += 10;
      }
      index -= 20;
      for (let i = 0; i < index; i += 20){
         ctx.fillRect(x, y, 10, 10)
         ctx.fillStyle = "black";

         y += 10;
      }
      index -= 20;
      for (let i = 0; i < index; i += 20){
         ctx.fillRect(x, y, 10, 10)
         ctx.fillStyle = "black";

         x -= 10;
      }
      index -= 20;
      for (let i = 0; i < index; i += 20){
         ctx.fillRect(x, y, 10, 10)
         ctx.fillStyle = "black";

         y -= 10;
      }

   }
 
}