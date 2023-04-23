function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(590, 150);
    poseNet =  ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('Posenet is initialized.');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = floor(leftWrist - rightWrist);
    }
}
function draw(){
    background('#7FFFD4');
    textSize(10);
    textSize(difference);
    fill('#FFE787')
    text('Nikhil', 50, 400);
}
