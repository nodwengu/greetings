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
var namesGreeted = {
    name: the_nameElem
};

// console.log(namesGreeted);

function greetmeBtnClicked(the_nameElem) {
    for(var i = 0; i < languageRaioElem.length; i++){
        var elem = languageRaioElem[i];
        if(elem.checked === true) {
            if( (elem.value === "english") && (document.querySelector('.the_name').value !== "") ) {
            // englisCounter++;
            greetingsCounter++;
            
            var msg = ("Hello, " + document.querySelector('.the_name').value);
    
            greetMsgElem.innerHTML = msg
            count_textElem.innerHTML = greetingsCounter;
            document.querySelector('.the_name').value = '';
            }  else if(elem.value === "afrikaans" && (document.querySelector('.the_name').value !== "")) {
                // afrikaansCounter++;
                greetingsCounter++;
                var msg = ("Hallo, " + document.querySelector('.the_name').value);
                greetMsgElem.innerHTML = msg;
                count_textElem.innerHTML = greetingsCounter;
                document.querySelector('.the_name').value = '';
    
            } else if(elem.value === "isixhosa" && (document.querySelector('.the_name').value !== "")) {
                // isixhosaCounter++;
                greetingsCounter++;
                var msg = ("Molo, " + document.querySelector('.the_name').value);
                greetMsgElem.innerHTML = msg;
                count_textElem.innerHTML = greetingsCounter;
                document.querySelector('.the_name').value = '';
            } 
        }
    }
}

// function greetmeBtnClicked(the_nameElem) {
//     for(var i = 0; i < languageRaioElem.length; i++){
//         var elem = languageRaioElem[i];
//         if(elem.checked === true) {
//             if( (elem.value === "english") && (document.querySelector('.the_name').value !== "") ) {
//             // englisCounter++;
//             // greetingsCounter++;
            
//             // var msg = ("Hello, " + document.querySelector('.the_name').value);
    
//             // greetMsgElem.innerHTML = msg
//             // count_textElem.innerHTML = greetingsCounter;
//             // document.querySelector('.the_name').value = '';

//             if (namesGreeted[the_nameElem] === undefined){
//                 alert("namesGreeted[the_nameElem]");
//                 greetingsCounter++;
//                 //add an entry for the user that was greeted in the Object Map
//                 // namesGreeted[userName] = 0;
//                 //update the DOM to display the counter
//                 count_textElem.innerHTML = greetingsCounter;
//             } else {
//                 alert("name exists");
//             }
//         } 
//         }
//     }
// }

function resetCounterBtnClicked() {
    count_textElem.innerHTML = 0;
    greetingsCounter = 0;
}

greetmeBtnElem.addEventListener('click', greetmeBtnClicked);

resetCounterElem.addEventListener('click', resetCounterBtnClicked);
