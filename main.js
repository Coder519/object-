img ="";
status = "";
function preload(){
          img = loadImage('dog_cat.jpg');
}
function setup(){
          canvas = createCanvas(640 , 420);
          canvas.center();
          objectDetector = ml5.objectDetector('cocossd' . modelLoaded)
          document.getElementById("status").innerHTML = "Status : Detecting Objets";
}
function modelLoaded(){
          console.log("Model Loaded!")
          status = true;
          objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
          if(error) {
                    console.log(error)
          }
          console.log(results);
}

function draw(){
          image(img, 0,0,640,420);
          fill("#F0000");
          text("Dog",45,45);
          text("Cat",500,300,);
          noFill();
          stroke("#F0000");
          rect(30,60,450,350);
          rect(250,40,500,300)
}