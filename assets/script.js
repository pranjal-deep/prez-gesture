const content = [{title:"Day 1: Sound",description:"Cat Dating application"},
                {title:"Day 2: ",description:"description 2"},
                {title:"title 3",description:"description 3"},
                {title:"title 4",description:"description 4"},
                {title:"title 5",description:"description 5"},
                {title:"Thanks",description:""}]; 
                
var page = 0, time;

let video, classifier, modelURL = './assets/model/hand-gesture-model/';

///////using ml5


function preload(){
    classifier = ml5.imageClassifier(modelURL+'model.JSON');
    console.log("Model Loaded");
}

function setup(){
    // createCanvas(640,400);
    video = createCapture(VIDEO);
    video.hide();
    classifyVideo();
    time = millis();
}

function draw(){
    background(0);
    // image(video,0,0);

    
    
    let timeOnCurrentSlide = millis();

    // console.log("timeOnCurrentSlide: "+timeOnCurrentSlide);
    // console.log("time: "+time);
    
    if(timeOnCurrentSlide >= time+3000){
        console.log("timeOnCurrentSlide: "+timeOnCurrentSlide);
        console.log("time: "+time);
        classifyVideo();
    }
}

function classifyVideo(){
    classifier.classify(video,gotResults)
}

function gotResults(error, results){
    if(error){
        console.log(error);
        return
    }    

    console.log(results[0].label);
    if(results[0].label == 'Right'){
        time = millis();
        nextSlide();
    } else if(results[0].label == 'Left'){
        time = millis();
        previousSlide();
    } else{
        // classifyVideo();
    }
}

function nextSlide() {
    if(page<content.length){
        document.getElementById('title').innerHTML = content[page].title;
        document.getElementById('content').innerHTML = content[page].description;
        page++; 
        // delayTime(1.0);
    }
}

function previousSlide() {
    if(page>0){
        page--;
        document.getElementById('title').innerHTML = content[page].title;
        document.getElementById('content').innerHTML = content[page].description;
    }
    // classifyVideo();
}