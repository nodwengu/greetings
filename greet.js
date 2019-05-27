var greetmeBtnElem = document.querySelector('.greetme-btn');
var the_nameElem = document.querySelector('.the_name').value;
var greetMsgElem = document.querySelector('.greetMsg');
var count_textElem = document.querySelector('.count_text');
var languageRaioElem = document.querySelectorAll('.languageRadio');
var resetCounterElem = document.querySelector('.resetCounter');

// var englisCounter = 0;
// var afrikaansCounter = 0;
// var isixhosaCounter = 0;
var greetingsCounter = 0;
var namesGreeted = {};

// console.log(namesGreeted);

count_textElem.innerHTML = localStorage.getItem('greetingsCounter');

function greetmeBtnClicked(the_nameElem) {
    for(var i = 0; i < languageRaioElem.length; i++){
        var elem = languageRaioElem[i];
        if(elem.checked === true) {
            if( (elem.value === "english") && (document.querySelector('.the_name').value !== "") ) {
                // englisCounter++;
                keepGreetingsCount();
            
                var msg = ("Hello, " + document.querySelector('.the_name').value);
        
                greetMsgElem.innerHTML = msg
                document.querySelector('.the_name').value = '';

            }  else if(elem.value === "afrikaans" && (document.querySelector('.the_name').value !== "")) {
                // afrikaansCounter++;
                keepGreetingsCount();
            
                var msg = ("Hallo, " + document.querySelector('.the_name').value);
        
                greetMsgElem.innerHTML = msg
                document.querySelector('.the_name').value = '';
    
            } else if(elem.value === "isixhosa" && (document.querySelector('.the_name').value !== "")) {
                // isixhosaCounter++;
                keepGreetingsCount();
            
                var msg = ("Molo, " + document.querySelector('.the_name').value);
        
                greetMsgElem.innerHTML = msg
                document.querySelector('.the_name').value = '';

            } 
        }
    }
}

function keepGreetingsCount() {
    greetingsCounter = localStorage.getItem('greetingsCounter');
    greetingsCounter++;
    localStorage.setItem("greetingsCounter", greetingsCounter);
    count_textElem.innerHTML = greetingsCounter;
  
}

function saveNames() {
    // alert("save names is working");
    localStorage.setItem('names', JSON.stringify(namesGreeted));

    // Read item:
    // var names = JSON.parse(localStorage.getItem('names'));
    // console.log(names);

    var obj = JSON.parse( localStorage.getItem('names') );
    obj[name] = 'Thandolwethu';
    localStorage.setItem('names', JSON.stringify(obj));

}
saveNames();

function resetCounterBtnClicked() {
    localStorage.clear();
    count_textElem.innerHTML = 0;
    greetingsCounter = 0;
}

greetmeBtnElem.addEventListener('click', greetmeBtnClicked);

resetCounterElem.addEventListener('click', resetCounterBtnClicked);
