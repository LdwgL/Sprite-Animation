console.log(initialize);
// Initialisation Canvas
function initialize() {
  const canvas = document.getElementById("mycanvas");
  if (!(canvas instanceof HTMLCanvasElement)) return;
  const ctx = canvas.getContext("2d");
  const CANVAS_WIDTH = (canvas.width = 600);
  const CANVAS_HEIGHT = (canvas.height = 600);
  const spriteWidth = 575;
  const spriteHeight = 523;
  let frameX = 1;
  let frameY = 2;
  let gameFrame = 0;
  const staggerFrames = 5;

  // Create Image and import
  const playerImage = new Image();
  playerImage.src = "assets/shadow-dog.png";

  function animate() {
    if (ctx === null) return;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    // ctx.fillRect(50, 50, 100, 100);
    ctx.drawImage(
      playerImage,
      frameX * spriteWidth,
      frameY * spriteHeight,
      spriteWidth,
      spriteHeight,
      0,
      0,
      spriteWidth,
      spriteHeight
    );
    if (frameX < 6) frameX++;
    else frameX = 0;

    gameFrame++;

    window.requestAnimationFrame(animate);
  }
  animate();
}

initialize();
