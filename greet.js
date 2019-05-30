var greetmeBtnElem = document.querySelector('.greetme-btn');
var the_nameElem = document.querySelector('.the_name').value;
var greetMsgElem = document.querySelector('.greetMsg');
var count_textElem = document.querySelector('.count_text');
var languageRaioElem = document.querySelectorAll('.languageRadio');
var resetCounterElem = document.querySelector('.resetCounter');

var greetingsCounter = 0;

count_textElem.innerHTML = localStorage.getItem('greetingsCounter');

function greetmeBtnClicked(the_nameElem) {
   var nameValue = document.querySelector('.the_name').value
   for(var i = 0; i < languageRaioElem.length; i++){
      var elem = languageRaioElem[i];
      if(elem.checked === true) {
         if( (elem.value === "english") && nameValue !== "" ) {
            keepGreetingsCount();
   
            greetMsgElem.innerHTML = "Hello, " + nameValue;
            document.querySelector('.the_name').value;
         }  else if(elem.value === "afrikaans" && nameValue !== "") {
            keepGreetingsCount();
   
            greetMsgElem.innerHTML = "Hallo, " + nameValue.
            document.querySelector('.the_name').value;  
         } else if(elem.value === "isixhosa" && nameValue !== "") {
            keepGreetingsCount();
   
            greetMsgElem.innerHTML = "Molo, " + nameValue
            document.querySelector('.the_name').value = '';
         } 
      }
   }
   
}

var namesGreeted = {};
var namesArr = [];

function keepGreetingsCount(the_nameElem) {
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
            break;
         } else {
            if( localStorage.getItem('greetingNames') == null) {
               namesArr.push(nameObj);
               localStorage.setItem('greetingNames', JSON.stringify(namesArr));

               greetingsCounter++;
               localStorage.setItem("greetingsCounter", greetingsCounter);
               count_textElem.innerHTML = greetingsCounter;               
            } else {
               namesArr = JSON.parse(localStorage.getItem('greetingNames'));
               namesArr.push(nameObj);
               localStorage.setItem('greetingNames', JSON.stringify(namesArr));

               greetingsCounter = localStorage.getItem('greetingsCounter');
               greetingsCounter++;
               localStorage.setItem("greetingsCounter", greetingsCounter);
               count_textElem.innerHTML = greetingsCounter;
            }           
            break;
         }
      }    
   } else {
      alert("First appearance on the list");
      namesArr.push(nameObj);

      localStorage.setItem( 'greetingNames', JSON.stringify(namesArr) );

      greetingsCounter++;
      localStorage.setItem("greetingsCounter", greetingsCounter);
      count_textElem.innerHTML = greetingsCounter;
   }
}

function resetCounter() {
   localStorage.clear();
   count_textElem.innerHTML = 0;
   greetingsCounter = 0;
}


greetmeBtnElem.addEventListener('click', greetmeBtnClicked);

resetCounterElem.addEventListener('click', resetCounter);
