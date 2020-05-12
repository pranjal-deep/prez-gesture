const content = [{title:"Day 1: Sound",description:"Cat Dating application"},
                {title:"Day 2: ",description:"description 2"},
                {title:"title 3",description:"description 3"},
                {title:"title 4",description:"description 4"},
                {title:"title 5",description:"description 5"},
                {title:"Thanks",description:""}]; 
                
var page = 1, time, titleX, titleY;

let video,img1,img2, classifier, modelURL = './assets/model/hand-gesture-model-2/';

///////using ml5


function preload(){
    classifier = ml5.imageClassifier(modelURL+'model.JSON');
    console.log("Model Loaded");
    img1 = loadImage('assets/images/story-1.jpg');
    img2 = loadImage('assets/images/story-2.jpg');
    img3 = loadImage('assets/images/hackathons.png');
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    video = createCapture(VIDEO);
    video.hide();
    classifyVideo();
    time = millis();
    fill('#14f55f');
    textSize(50);
    textFont('Courier New');
    titleX = windowWidth/3 - 150; 
    titleY=windowHeight/3+30;
}

// function draw(){
//     // image(video,0,0);
//     background(0);
//     slideManager();
// }

function classifyVideo(){
    classifier.classify(video,gotResults)
}

function gotResults(error, results){
    if(error){
        console.log(error);
        return
    }    
    console.log(results[0].label);
    if(results[0].label == 'Right' && millis()>time+3000){
        time = millis();
        page++;
    } else if(results[0].label == 'Left' && millis()>time+3000){
        time = millis();
        page--;
    }
    slideManager();
    classifyVideo();
}

function slideManager(){
    if(page <= 1){
        page=1;
        firstSlide();
    } else if(page == 2){
        secondSlide();
    } else if(page == 3){
        thirdSlide();
    } else if(page == 4){
        fourthSlide();
    } else if(page == 5){
        fifthSlide();
    } else if(page == 6){
        sixthSlide();
    } else if(page == 7){
        seventhSlide();
    } else if(page == 8){
        eightSlide();
    } else if(page == 9){
        ninthSlide();
    } else if(page == 10){
        tenthSlide();
    } else if(page == 11){
        eleventhSlide();
    } else if(page == 12){
        twelfthSlide();
    } else if(page >= 13){
        page = 13;
        thirteenthSlide();
    }
}

function firstSlide() {
    background(0);
    textSize(50);
    textStyle(BOLD);
    text('The Interactive Web', titleX, titleY);
    textSize(32);
    textStyle(NORMAL);
    text('MS 2: 5 in 5', titleX, titleY+60);
    text('Pranjal Deep', titleX, titleY+250);
}

function secondSlide() {
    background(0);
    textSize(50);
    textStyle(BOLD);
    text('Day 1', titleX, titleY);
    textSize(32);
    textStyle(NORMAL);
    text('Plan: Presentation tool using Voice', titleX, titleY+60);
    text('Actual: Cat Dating Application', titleX, titleY+100);
    text('P5 Speech', titleX, titleY+250);
}

let vid, vidURL = './assets/video/cat-video.mp4';

function thirdSlide() {
    background(0);
    vid = createVideo(vidURL);
    noCanvas();
    vid.size(windowWidth-40, windowHeight-20);
    vid.loop();
    vid.volume(0);
}

function fourthSlide() {
    vid.hide();
    createCanvas(windowWidth,windowHeight);
    fill('#14f55f');
    textSize(50);
    textStyle(BOLD);
    text('Day 2', titleX, titleY);
    textSize(32);
    textStyle(NORMAL);
    text('Plan: Presentation tool using gesture', titleX, titleY+60);
    text('Actual: Presentation tool using gesture', titleX, titleY+100);
    text('Teachables Machine, ML5, P5', titleX, titleY+250);
    // page++;
}

function fifthSlide() {
    textSize(50);
    textStyle(BOLD);
    text('Day 2', titleX, titleY);
    textSize(32);
    textStyle(NORMAL);
    text('Plan: Presentation tool using gesture', titleX, titleY+60);
    text('Actual: Presentation tool using gesture', titleX, titleY+100);
    text('Teachables Machine, ML5, P5', titleX, titleY+250);
}

function sixthSlide() {
    textSize(50);
    textStyle(BOLD);
    text('Day 3', titleX, titleY);
    textSize(32);
    textStyle(NORMAL);
    text('Plan: Museum styled installation for mouse', titleX, titleY+60);
    text('Actual: Portfolio website using gesture', titleX, titleY+100);
    text('Teachables Machine, ML5, P5', titleX, titleY+250);
}

function seventhSlide() {
    vidURL='./assets/video/portfolio-gesture.mp4';
    vid = createVideo(vidURL);
    noCanvas();
    vid.size(windowWidth-40, windowHeight-20);
    vid.loop();
    vid.volume(0);
    noLoop();
    classifyVideo();    
}

function eightSlide() {
    vid.hide();
    createCanvas(windowWidth,windowHeight);
    fill('#14f55f');
    page++;
}

function ninthSlide() {
    textSize(50);
    textStyle(BOLD);
    text('Day 4', titleX, titleY);
    textSize(32);
    textStyle(NORMAL);
    text('Plan: Non-linear story using eye tracking', titleX, titleY+60);
    text('Actual: Non-liner story using eye tracking (Not working)', titleX, titleY+100);
    text('Webgazer, Sketching', titleX, titleY+250);
}

function tenthSlide() { 
    image(img1,10,10,windowWidth/3+30,windowHeight-20);
    image(img2,windowWidth/3+50,10,2*windowWidth/3-60,windowHeight-20);
}

function eleventhSlide() {
    textSize(50);
    textStyle(BOLD);
    text('Day 5', titleX, titleY);
    textSize(32);
    textStyle(NORMAL);
    text('Plan: Design system for a hands free web interface', titleX, titleY+60);
    text('Actual: BCI + Hackathons!', titleX, titleY+100);
    // text('Webgazer, Sketching', titleX, titleY+250);
}

function twelfthSlide() {
    image(img3,10,10,windowWidth-30,windowHeight-20);
}

function thirteenthSlide() {
    textSize(50);
    textStyle(BOLD);
    text('Thanks!', titleX, titleY);
}