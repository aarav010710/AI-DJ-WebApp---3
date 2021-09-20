song1 = "";
song2 = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightWristY = 0;

function preload()
{
    song1 = loadSound("yummy.mp3");
    song2 = loadSound("Avicii.mp3")
}
function setup()
{
    canvas = createCanvas(580, 480);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model is loaded!!");
}

function draw()
{
    image(video, 0,0 ,580, 480);
}

function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;

    leftWristY = results[0].pose.leftWrist.y;
    rightWristY = results[0].pose.rightWrist.y;
}
}