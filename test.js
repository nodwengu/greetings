var greetmeBtnElem = document.querySelector('.greetme-btn');
var the_nameElem = document.querySelector('.the_name').value;
var greetMsgElem = document.querySelector('.greetMsg');
var count_textElem = document.querySelector('.count_text');
var languageRaioElem = document.querySelectorAll('.languageRadio');
var resetCounterElem = document.querySelector('.resetCounter');

var greetingOne = createGreetings();

count_textElem.innerHTML = localStorage.getItem('greetingsCounter');

function greetmeBtnClicked() {
   var nameValue = document.querySelector('.the_name').value

   if (nameValue == nameValue.toLowerCase()){
      nameValue = nameValue.charAt(0).toUpperCase() + nameValue.slice(1);
   } else {
      nameValue = nameValue.toLowerCase();
      nameValue = nameValue.charAt(0).toUpperCase() + nameValue.slice(1);
   }

   for(var i = 0; i < languageRaioElem.length; i++){
      var elem = languageRaioElem[i];
      if(elem.checked === true) {
         if( (elem.value === "english") && nameValue !== "" ) {
            greetingOne.saveName(nameValue);

            greetMsgElem.innerHTML = greetingOne.englishGreeting(nameValue);
            document.querySelector('.the_name').value = '';
            count_textElem.innerHTML = greetingOne.getCounter();
         } else if(elem.value === "afrikaans" && nameValue !== "") {
            greetingOne.saveName(nameValue);
            greetMsgElem.innerHTML = greetingOne.afrikaansGreeting(nameValue);
            document.querySelector('.the_name').value = '';
            count_textElem.innerHTML = greetingOne.getCounter();
         } else if(elem.value === "isixhosa" && nameValue !== "") {
            greetingOne.saveName(nameValue);
            greetMsgElem.innerHTML = greetingOne.xhosaGreeting(nameValue);
            document.querySelector('.the_name').value = '';
            count_textElem.innerHTML = greetingOne.getCounter();
         }
      }
   }
   
}

function resetCounter() {
   greetingOne.reset();
}

greetmeBtnElem.addEventListener('click', greetmeBtnClicked);

resetCounterElem.addEventListener('click', resetCounter);
