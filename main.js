random_number = random_no = Math.floor((Math.random()*array_1.length)+1);
console.log(quick_draw_data_set = random_number);
drawn_sketch = quick_draw_data_set = random_number;
drawn = + drawn_sketch;


timer_counter = 0;
timer_check =  "";
drawn_sketch = "";
answer_holder = "";
score = 0;
sketch = "canvas"

function draw1(){
   check_sketch();
   if(drawn_sketch = sketch){
       answer_holder+"set";
       score +1;
       Scor+score;
   }
}

function check_sketch(){
   timer_counter+1;
   Timer+timer_counter;
   console.log("Value of timer is"+timer_counter);
   if(timer_counter > 400){
       timer_check = "completed";

   }
   if(timer_check = "completed"){
       timer_check = "";
       answer_holder = "";
       updateCanvas();
   }
}

function updateCanvas(){
    
}

Math.floor(quick_draw_data_set+random_number);
console.log(array_1+quick_draw_data_set+random_number);

function setup(){
    canvas = createCanvas(280, 280);
      mouseReleased = classifyCanvas();
    }


function preload(){
    ml5.imageClassifier(classifier)
}

function draw(){
    strokeWeight = 15;
    strokeColor = black;
    if(mousePressed){
        line(pmouseX, pmouseY, mouseX, mouseY);

    }
}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results){
   if(error){
       console.error(error);
   }
   console.log(results);
   drawn_sketch = Sketch;
   Confidence = Math.round(result[0],confidence*100)+’%’;
}