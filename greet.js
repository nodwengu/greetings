var greetmeBtnElem = document.querySelector('.greetme-btn');
var greetMsgElem = document.querySelector('.greetMsg');
var count_textElem = document.querySelector('.count_text');
var languageRaioElem = document.querySelectorAll('.languageRadio');
var resetCounterElem = document.querySelector('.resetCounter');

var greetingsInstance = createGreetings();

var data = JSON.parse( localStorage.getItem('greetingNames') );

count_textElem.innerHTML = localStorage.getItem('greetingsCounter');
console.log(languageRaioElem[0].checked)
function greetmeBtnClicked() {
   var nameValue = document.querySelector('.the_name').value;
   
   if (nameValue == nameValue.toLowerCase()){
      nameValue = nameValue.charAt(0).toUpperCase() + nameValue.slice(1);
   } else {
      nameValue = nameValue.toLowerCase();
      nameValue = nameValue.charAt(0).toUpperCase() + nameValue.slice(1);
   }


   if( greetingsInstance.displayError(nameValue) || languageRaioElem[0].checked == false || languageRaioElem[1].checked == false) {
      document.querySelector('.error').classList.add('showError');
      document.querySelector('.error').innerHTML = "Error in your input field"
      return false;
   } else {
      document.querySelector('.error').classList.remove('showError');
   }
  
   //set the input fields
   greetingsInstance.setName(nameValue);
   //greetingsInstance.setNameObj();

   for(var i = 0; i < languageRaioElem.length; i++){
      var elem = languageRaioElem[i];
      if(elem.checked === true) {
         if( (elem.value === "english") ) {
            saveName();
            greetMsgElem.innerHTML = greetingsInstance.englishGreeting();
            document.querySelector('.the_name').value = '';
            count_textElem.innerHTML = greetingsInstance.getCounter();
         } else if( elem.value === "afrikaans" ) {
            saveName();
            greetMsgElem.innerHTML = greetingsInstance.afrikaansGreeting(nameValue);
            document.querySelector('.the_name').value = '';
            count_textElem.innerHTML = greetingsInstance.getCounter();
         } else if( elem.value === "isixhosa" ) {
            saveName();
            greetMsgElem.innerHTML = greetingsInstance.xhosaGreeting(nameValue);
            document.querySelector('.the_name').value = '';
            count_textElem.innerHTML = greetingsInstance.getCounter();
         }
      }
   }
   count_textElem.innerHTML = localStorage.getItem('greetingsCounter');
}

function saveName() {
   greetingsInstance.setNameObj();
  
   var data = JSON.parse( localStorage.getItem('greetingNames') );
   var newObj = greetingsInstance.getNameObj();
   var names = [];

   if(localStorage.getItem('greetingNames')) {
      if( greetingsInstance.checkName(data) ) {
         return;
      } else {
         names = JSON.parse(localStorage.getItem('greetingNames'));
         names.push(newObj);
         localStorage.setItem( 'greetingNames', JSON.stringify(names) );
         storeCounter()
      }
   } else {
      names.push(newObj);
      localStorage.setItem( 'greetingNames', JSON.stringify(names) );
      storeCounter();
   }      
}

function storeCounter() {
   if(localStorage.getItem('greetingsCounter')) { // if there is greetingsCounter item on local storage
      greetingsInstance.setCounter(localStorage.getItem('greetingsCounter'))
      greetingsInstance.increaseCounter()
      localStorage.setItem('greetingsCounter', greetingsInstance.getCounter());
   } else { // if there is NO greetingsCounter item on local storage
      greetingsInstance.increaseCounter();
      //Create greetings counter on the local storage
      localStorage.setItem('greetingsCounter', greetingsInstance.getCounter());   
   }
}

function resetCounter() {
   localStorage.clear();
   greetingsCounter = 0;
   location.reload();
}

greetmeBtnElem.addEventListener('click', greetmeBtnClicked);

resetCounterElem.addEventListener('click', resetCounter);