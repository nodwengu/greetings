var greetmeBtnElem = document.querySelector('.greetme-btn');
var the_nameElem = document.querySelector('.the_name').value;
var greetMsgElem = document.querySelector('.greetMsg');
var count_textElem = document.querySelector('.count_text');
var languageRaioElem = document.querySelectorAll('.languageRadio');
var resetCounterElem = document.querySelector('.resetCounter');


const createGreetings = function() {
   
   var greetingsCounter = 0;
   count_textElem.innerHTML = count();

   function count() {
      // Check if there is greetingsCounter on the local storage
      // if true
      // get the counter from the local storage
      // Increase the counter by 1
      // set the counter on the local storage

      // if false
      // create counter item on the local storage
      // set the counter to the initial counter

      //return the counter
      greet();

      if(localStorage.getItem('greetingsCounter')) { // if there is greetingsCounter item on local storage
         greetingsCounter = localStorage.getItem('greetingsCounter');
         greetingsCounter++;
         localStorage.setItem('greetingsCounter', greetingsCounter);

      } else { // if there is NO greetingsCounter item on local storage
         //Create greetings counter on the local storage
         localStorage.setItem('greetingsCounter', greetingsCounter);
      }

      return greetingsCounter;
   }

   function reset() {
      alert("reset function");
      localStorage.clear();
      count_textElem.innerHTML = 0;
      greetingsCounter = 0;
   }

   function greet() {
      alert("greet function");
   }

   return {
      greet: greet,
      count: count,
      reset: reset
   }
}

var greetings = createGreetings();
var counter = createGreetings();
var reseter = createGreetings();

// greetings.greet();
// greetings.count();
// greetings.reset();

greetmeBtnElem.addEventListener('click', greetings.count);

resetCounterElem.addEventListener('click', greetings.reset);