var greetmeBtnElem = document.querySelector('.greetme-btn');
var the_nameElem = document.querySelector('.the_name');
var greetMsgElem = document.querySelector('.greetMsg');
var count_textElem = document.querySelector('.count_text');
var counter = 0;


function greetmeBtnClicked() {
    counter++;
    var the_nameValue = the_nameElem.value;
    
    var msg = ("Hello, " + the_nameValue);

    document.querySelector('.the_name').value = '';
    greetMsgElem.innerHTML = msg
    count_textElem.innerHTML = counter;
  
}

greetmeBtnElem.addEventListener('click', greetmeBtnClicked);
