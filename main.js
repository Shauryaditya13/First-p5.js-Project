function preload() {
}

function setup() {
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO)
    video.hide();
    tintcolor="";
}

function draw() {
    image(video,90,40,400,340);

    fill(255,0,0)
    stroke(255,0,0)
    circle(70,50,50)

    circle(510,50,50)
    circle(70,390,50)
    circle(510,390,50)

    fill(0,128,0)
    stroke(0,128,0)
    rect(90,40,400,20)

    rect(80,40,20,360)
    rect(90,380,400,20)
    rect(480,40,20,360)

}

function take_snapshot() {
save("MyImage.png");
}