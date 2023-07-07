let isPlaying = false;
let grid = document.querySelector(".grid")
let square;
let squares=[];
let myButton = document.querySelector(".theButton")

function deleteDivs(){
 if(isPlaying){

   for (let i = 0; i < 400; i++) {
      squares[i].remove()
   }
   squares = [];
   isPlaying = false
   
}else{
 for (let i = 0; i < 400; i++) {
    square = document.createElement('div')
    grid.appendChild(square)
    square.classList.add("square")
 }

 squares = Array.from(document.querySelectorAll('.grid div'))
 isPlaying = true
} 
}

//As above but adding an 80 millisecond delay:
var i = 0;                  

function myLoop() {         //  create a loop function
  setTimeout(function() {  
   if(isPlaying){
      squares[i].remove();  
   } else {
      square = document.createElement('div');
      grid.appendChild(square);
      square.classList.add("square");  //  your code here
   } 
   i++;
   if (i < 400) {        
      myLoop();
    } else {
      squares = Array.from(document.querySelectorAll('.grid div'));
      isPlaying = !isPlaying;
      i = 0;
    }
  }, 80); 
 
}



myButton.addEventListener("click", myLoop);

