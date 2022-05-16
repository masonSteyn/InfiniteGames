var starG
var score = 0
gameState = "start"
function preload() {
    rocketship = loadImage("rocket2.png")
    star1 = loadImage("finalstar.png")
    meteor1 = loadImage("meteor.png")
    bg = loadImage("galaxyBG.jpg")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    scene = createSprite(width/2,height/2,width,height)
    scene.addImage(bg)
    scene.velocityY = 1
    ship = createSprite(760, 700, 10, 10)
    ship.addImage(rocketship)
    ship.scale = 0.2
    starG = new Group();

    

}

function draw() {
    background(0)
    if (gameState === "start") {
        createStars()
        drawSprites()
        if(scene.y>height/2+100){
            scene.y = height/2
        }
        if (keyDown(RIGHT_ARROW)) {
            ship.x = ship.x + 12
        }
        if (keyDown(LEFT_ARROW)) {
            ship.x = ship.x - 12
        }
        if (ship.x > 1470) {
            ship.x = 0
        }
        if (ship.x < 0) {
            ship.x = 1470
        }
        fill("white")
        textSize(20)
    text("score " + score,200,200)
    }
    if (starG.isTouching(ship)) {
        gameState = "end"
        starG.destroyEach()
    }
    if (gameState === "end") {
        fill("white")
    
        textSize(50)
        text("you lose", 720, 300)
        text("press space to play again", 600, 500)
        text("your score was " + score, 600,700)
    }
    if(keyDown("SPACE")){
        gameState = "start"
        score = 0

}
}
function createStars() {
    if (World.frameCount % 10 == 0) {
        var star = createSprite(Math.round(random(50, width - 50), 40, 10, 10));
        star.addImage(meteor1);
        star.setCollider("rectangle", 0, 0, 20, 80, -45)
        star.scale = 0.3
        star.velocityY = 10;
        star.lifetime = 200;
        starG.add(star)
         score += 1

    }

}
