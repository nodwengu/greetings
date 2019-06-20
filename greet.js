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

   // alert( greetingOne.checkName(nameValue) );

   if( greetingOne.displayError(nameValue) ) {
      document.querySelector('.error').classList.add('showError');
      document.querySelector('.error').innerHTML = "Error in your input field"
      return false;
   } else {
      document.querySelector('.error').classList.remove('showError');
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
   count_textElem.innerHTML = localStorage.getItem('greetingsCounter');
}

function resetCounter() {
   greetingOne.reset();
}

function addName(name) {
  
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

      var name = theName.toLowerCase();

      for(var key in namesGreeted) {
         if(namesGreeted.hasOwnProperty(name)) {
            //alert(name + " already exists");
            return false;
         } else {
            if( localStorage.getItem('greetingNames') == null) {
               namesArr.push(nameObj);
               greetingOne.setCounter()
               localStorage.setItem('greetingNames', JSON.stringify(namesArr));
      
            } else {
               namesArr = JSON.parse(localStorage.getItem('greetingNames'));
               namesArr.push(nameObj);
               greetingOne.setCounter()
               localStorage.setItem('greetingNames', JSON.stringify(namesArr));
            
            }           
            break;
         }
      }    
   } else {
      //alert("First appearance on the list");
      namesArr.push(nameObj);
      greetingOne.setCounter()
      localStorage.setItem( 'greetingNames', JSON.stringify(namesArr) );
   }

}

greetmeBtnElem.addEventListener('click', greetmeBtnClicked);

resetCounterElem.addEventListener('click', resetCounter);
