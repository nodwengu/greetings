const createGreetings = function() {
    var namesGreeted = {};
    var namesArr = [];
    var greetingsCounter = 0;

    function getCounter() {
        if(localStorage.getItem('greetingsCounter')) { // if there is greetingsCounter item on local storage
            greetingsCounter = localStorage.getItem('greetingsCounter');
            greetingsCounter++;
            localStorage.setItem('greetingsCounter', greetingsCounter);
        } else { // if there is NO greetingsCounter item on local storage
            greetingsCounter++;
            //Create greetings counter on the local storage
            localStorage.setItem('greetingsCounter', greetingsCounter);   
        }
   
        return greetingsCounter;
    }

    function saveName(theName) {
        alert("Name: " + theName);
      var nameObj = {
         name: theName.toLowerCase() 
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
   
        var name = theName.toLowerCase();
   
         for(var key in namesGreeted) {
            if(namesGreeted.hasOwnProperty(name)) {
               alert("User name already exists");
               //errorElem.classList.add('show-error')
               break;
            } else {
               if( localStorage.getItem('greetingNames') == null) {
                  namesArr.push(nameObj);
                  localStorage.setItem('greetingNames', JSON.stringify(namesArr));
           
               } else {
                  namesArr = JSON.parse(localStorage.getItem('greetingNames'));
                  namesArr.push(nameObj);
                  localStorage.setItem('greetingNames', JSON.stringify(namesArr));
               }           
               break;
            }
         }    
      } else {
         alert("First appearance on the list");
         namesArr.push(nameObj);
   
         localStorage.setItem( 'greetingNames', JSON.stringify(namesArr) );

      }
    }

    function getName() {}

    function englishGreeting(radioVal, name) {
        if( (radioVal === "english") && name !== "" ) {
            return "Hello, " + name;
            // document.querySelector('.the_name').value  = '';
        }
    }

    function afrikaansGreeting(radioVal, name) {
        if( (radioVal === "afrikaans") && name !== "" ) {
            return "Hallo, " + name;
            // document.querySelector('.the_name').value  = '';
        }
    }

    function xhosaGreeting(radioVal, name) {
        if( (radioVal === "isixhosa") && name !== "" ) {
            return "Molo, " + name;
            // document.querySelector('.the_name').value  = '';
        }
    }

    function reset() {
        alert("reset function");
        localStorage.clear();
        greetingsCounter = 0;
        location.reload();
     }

    return {
        getCounter,
        saveName,
        reset,
        englishGreeting,
        afrikaansGreeting,
        xhosaGreeting
    }
}

var greetInstance = createGreetings();

//alert(greetInstance.xhosaGreeting('isixhosa', 'mzi'));