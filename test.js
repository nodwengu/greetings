var greetmeBtnElem = document.querySelector('.greetme-btn');
var the_nameElem = document.querySelector('.the_name');
var greetMsgElem = document.querySelector('.greetMsg');
var count_textElem = document.querySelector('.count_text');
var languageRaioElem = document.querySelectorAll('.languageRadio');
var resetCounterElem = document.querySelector('.resetCounter');
var errorElem = document.querySelector('.error');


const createGreetings = function() {
   
   var namesGreeted = {};
   var namesArr = [];
   var greetingsCounter = 0;

   var Counter = localStorage.getItem('greetingsCounter');
   count_textElem.innerHTML = Counter;
   
   function getCounter() {
      
      // Check if there is greetingsCounter on the local storage
      // if true
      // get the counter from the local storage
      // Increase the counter by 1
      // set the counter on the local storage

      // if false
      // create counter item on the local storage
      // set the counter to the initial counter

      //return the counter
      // greet();
      if(the_nameElem.value == "") {
         errorElem.classList.add('show-error')
         return
      } 
     
      if(localStorage.getItem('greetingsCounter')) { // if there is greetingsCounter item on local storage
         greetingsCounter = localStorage.getItem('greetingsCounter');
         greetingsCounter++;
         count_textElem.innerHTML = greetingsCounter;
         localStorage.setItem('greetingsCounter', greetingsCounter);
         

      } else { // if there is NO greetingsCounter item on local storage
         greetingsCounter++;
         //Create greetings counter on the local storage
         localStorage.setItem('greetingsCounter', greetingsCounter);
         
      }
      

      return greetingsCounter;
   }

   function reset() {
      alert("reset function");
      localStorage.clear();
      // count_textElem.innerHTML = 0;
      greetingsCounter = 0;
      location.reload();
   }

   function greet() {
      alert("greet function");
   }

   function displayError() {
      if(the_nameElem.value == "") {
         errorElem.classList.add('show-error')
         return
      } 
   }

   function greetByName() {
      getCounter();

      // alert(the_nameElem.value)
      var nameValue = document.querySelector('.the_name').value
      for(var i = 0; i < languageRaioElem.length; i++){

         var elem = languageRaioElem[i];
         if(elem.checked === true) {
            
            var elem = languageRaioElem[i];
            // alert(elem.value)
            if( (elem.value === "english") && nameValue !== "" ) {
               
               getName();
               greetMsgElem.innerHTML = "Hello, " + the_nameElem.value;
               document.querySelector('.the_name').value  = '';

            }  else if(elem.value === "afrikaans" && nameValue !== "") {

               getName();
               greetMsgElem.innerHTML = "Hallo, " + the_nameElem.value;
               document.querySelector('.the_name').value  = '';  

            } else if(elem.value === "isixhosa" && nameValue !== "") {

               getName();
               greetMsgElem.innerHTML = "Molo, " + the_nameElem.value
               document.querySelector('.the_name').value = '';
            } 
         }
      }
   
   }

   function getName() {
      alert("Name: " + the_nameElem.value);
      var nameObj = {
         name: document.querySelector('.the_name').value.toLowerCase() 
      }
   
      if(localStorage.getItem('greetingNames')) {
         var data = JSON.parse( localStorage.getItem('greetingNames') );
   
         for(let i = 0; i < data.length; i++) {
            var elem = data[i];
            var name = elem.name;
            
            if (namesGreeted[name] === undefined){
               //add an entry for the user that was greeted in the Object Map
               namesGreeted[name] = 0;
            } else {
               namesGreeted[name]++;
            }
         }
   
         var name = (document.querySelector('.the_name').value).toLowerCase();
   
         for(var key in namesGreeted) {
            if(namesGreeted.hasOwnProperty(name)) {
               alert("User name already exists");
               errorElem.classList.add('show-error')
               break;
            } else {
               if( localStorage.getItem('greetingNames') == null) {
                  updateStorage()
                  namesArr.push(nameObj);
                  localStorage.setItem('greetingNames', JSON.stringify(namesArr));
           
               } else {
                  namesArr = JSON.parse(localStorage.getItem('greetingNames'));
                  updateStorage()
                  namesArr.push(nameObj);
                  localStorage.setItem('greetingNames', JSON.stringify(namesArr));
               }           
               break;
            }
         }    
      } else {
         alert("First appearance on the list");
         updateStorage()
         namesArr.push(nameObj);
   
         localStorage.setItem( 'greetingNames', JSON.stringify(namesArr) );
   
         getName();
      }
   }

   function updateStorage() {
      if(the_nameElem.value == "") {
         alert("about to update storage")
      }
   }

   return {
      greetByName: greetByName,
      greet: greet,
      getCounter: getCounter,
      reset: reset,
      displayError: displayError,
      getName: getName,
      updateStorage: updateStorage
   }
}

var greetings = createGreetings();
var counter = createGreetings();
var reseter = createGreetings();
var error = createGreetings();
var displayError = createGreetings();

// greetings.greet();
// greetings.count();
// greetings.reset();

greetmeBtnElem.addEventListener('click', greetings.greetByName);

resetCounterElem.addEventListener('click', greetings.reset);