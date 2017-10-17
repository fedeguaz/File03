function setup() {
  createCanvas(500,500);
  background(255);
  for(var a=-500; a<500; a+=30) {
    for(var b=a; b<500;b+=15) {
      line(a,0,a+500,500);
      line(a+500,0,a,500);
      line(0,b,500,b);
      stroke(247);
      strokeWeight(0.5);
    }}
var forma=int(random(4));
  if(forma==1){
  for(var x=20; x<=500; x+=30) {
    for (var y=10; y<=500; y+=30){
      var diametro=10
      fill(173,32,107);
      noStroke();
      ellipse(x,y,diametro);
      
    }
  }
  for(var c=5; c<=500; c+=30) {
    for(var d=25; d<=500; d+=30){
      fill(255,195,13);
      noStroke();
      ellipse(c,d,diametro);
    }
  }
  }
  else if (forma ==3) {
   for(var x=15; x<=500; x+=30) {
    for (var y=5; y<=500; y+=30){
      fill(225,31,38);
      noStroke();
      rect(x,y,10,10);
      
    }
  }
  for(var c=3; c<=500; c+=30) {
    for(var d=23; d<=500; d+=30){
      fill(106,168,67);
      noStroke();
      rect(c,d,5,5);
    }
  } 
  }
  else if (forma==0) {
    for(var x=15; x<=500; x+=30) {
    for (var y=10; y<=500; y+=30){
      var diametro=10
      fill(217,28,80);
      noStroke();
      triangle(x,y,x+5,y-10,x+10,y);
      
    }
  }
  for(var x=3; x<=500; x+=30) {
    for (var y=18; y<=500; y+=30){
      var diametro=10
      fill(249,158,28);
      noStroke();
      triangle(x,y,x+2.5,y-5,x+5,y);
      
    }
  }
for(var x=0; x<=500; x+=30) {
    for (var y=25; y<=500; y+=30){
      var diametro=10
      fill(43,119,149)
      noStroke();
      triangle(x,y,x+5,y+10,x+10,y);
      
    }
  }
  }
else {
 for(var x=15; x<=500; x+=30) {
    for (var y=10; y<=500; y+=30){
      var diametro=10
      fill(239,65,72);
      noStroke();
      triangle(x,y,x+5,y-10,x+10,y);
      
    }
  }
  for(var x=0; x<=500; x+=30) {
    for (var y=25; y<=500; y+=30){
      fill(0,166,186);
      noStroke();
      triangle(x,y,x+5,y+10,x+10,y);
      
    }
  }
  }
fill("white");
rect(20,430,460,45);
textAlign(CENTER);
  textAlign(CENTER);
  textSize(12);
  textStyle(BOLD);
  textFont("Helvetica");
  
  fill(71,51,78)
  text("REFRESH!", width/2,height/2+200);
  textSize(10);
  fill(98,72,109);
  text("(4 possible versions. Catch 'em all!)", width/2,(height/2)+215)
}

function draw(){
}