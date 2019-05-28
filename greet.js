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
            if( (elem.value === "english") && the_nameElem !== "" ) {
                keepGreetingsCount();
        
                greetMsgElem.innerHTML = "Hello, " + document.querySelector('.the_name').value
                document.querySelector('.the_name').value = '';

            }  else if(elem.value === "afrikaans" && the_nameElem !== "") {
                keepGreetingsCount();
        
                greetMsgElem.innerHTML = "Hallo, " + document.querySelector('.the_name').value
                document.querySelector('.the_name').value = '';
    
            } else if(elem.value === "isixhosa" && the_nameElem !== "") {
                keepGreetingsCount();
        
                greetMsgElem.innerHTML = "Molo, " + document.querySelector('.the_name').value
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

    // if( localStorage.getItem('greetingNames') == null) {
        
    //     namesArr.push(nameObj);
    //     localStorage.setItem('greetingNames', JSON.stringify(namesArr));
    // } else {
    //     namesArr = JSON.parse(localStorage.getItem('greetingNames'));
    //     namesArr.push(nameObj);
    //     localStorage.setItem('greetingNames', JSON.stringify(namesArr));
    // }
    

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

        var theTest = document.querySelector('.the_name').value;

        for(var key in namesGreeted) {
            if(namesGreeted.hasOwnProperty(theTest)) {
                alert("Item already existss");
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

        localStorage.setItem('greetingNames', JSON.stringify(namesArr));

        greetingsCounter++;
        localStorage.setItem("greetingsCounter", greetingsCounter);
    }
    
    
  
}


function resetCounter() {
    localStorage.clear();
    count_textElem.innerHTML = 0;
    greetingsCounter = 0;
}

greetmeBtnElem.addEventListener('click', greetmeBtnClicked);

resetCounterElem.addEventListener('click', resetCounter);
