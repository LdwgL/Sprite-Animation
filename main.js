let playerState = "idle";
const dropdown = document.getElementById("animations");
dropdown?.addEventListener("change", function (e) {
  playerState = e.target.value;
});
// Initialisation Canvas
function initialize() {
  const canvas = document.getElementById("mycanvas");
  if (!(canvas instanceof HTMLCanvasElement)) return;
  const ctx = canvas.getContext("2d");
  const CANVAS_WIDTH = (canvas.width = 600);
  const CANVAS_HEIGHT = (canvas.height = 600);
  const spriteWidth = 575;
  const spriteHeight = 523;

  let gameFrame = 0;
  const staggerFrames = 6;
  const spriteAnimations = [];

  // Array Sprite Animations

  const animationStates = [
    {
      name: "idle",
      frames: 7,
    },
    {
      name: "jump",
      frames: 7,
    },
    {
      name: "fall",
      frames: 7,
    },
    {
      name: "run",
      frames: 7,
    },
    {
      name: "dizzy",
      frames: 11,
    },
    {
      name: "sit",
      frames: 5,
    },
    {
      name: "roll",
      frames: 7,
    },
    {
      name: "bite",
      frames: 7,
    },
    {
      name: "ko",
      frames: 12,
    },
    {
      name: "gethit",
      frames: 4,
    },
  ];
  animationStates.forEach((state, index) => {
    let frames = {
      loc: [],
    };
    for (let j = 0; j < state.frames; j++) {
      let positionX = j * spriteWidth;
      let positionY = index * spriteHeight;
      frames.loc.push({ x: positionX, y: positionY });
    }
    spriteAnimations[state.name] = frames;
  });
  console.log(spriteAnimations);

  // Create Image and import
  const playerImage = new Image();
  playerImage.src = "assets/shadow-dog.png";

  function animate() {
    if (ctx === null) return;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position =
      Math.floor(gameFrame / staggerFrames) %
      spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(
      playerImage,
      frameX,
      frameY,
      spriteWidth,
      spriteHeight,
      0,
      0,
      spriteWidth,
      spriteHeight
    );
    if (gameFrame % staggerFrames == 0) {
      if (frameX < 6) frameX++;
      else frameX = 0;
    }

    gameFrame++;

    window.requestAnimationFrame(animate);
  }
  animate();
}

initialize();
