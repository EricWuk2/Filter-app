noseX=0;
noseY=0;

function preload() {
    filter = loadImage("https://o.remove.bg/downloads/693029b0-92e1-41e2-a400-f3a3396b64a4/mustache-student-math-favorite-for-friday-the-the-1-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(filter, noseX-75, noseY, 150, 50);
}

function take_snapshot() {
    save('photo.png')
}