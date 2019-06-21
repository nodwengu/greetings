const createGreetings = function() {
   var greetingsCounter = 0;
   var namesGreeted = {};
   var namesArr = [];

   function setCounter() {
      if(localStorage.getItem('greetingsCounter')) { // if there is greetingsCounter item on local storage
         greetingsCounter = localStorage.getItem('greetingsCounter');
         greetingsCounter++;
         localStorage.setItem('greetingsCounter', greetingsCounter);
      } else { // if there is NO greetingsCounter item on local storage
         greetingsCounter++;
         //Create greetings counter on the local storage
         localStorage.setItem('greetingsCounter', greetingsCounter);   
      }
   }

   function getCounter() {   
      return greetingsCounter; 
   }

   // function saveName(theName) {
   //    //alert("Name: " + theName);
   //    var nameObj = {
   //       name: theName.toLowerCase() 
   //    }
   
   //    if(localStorage.getItem('greetingNames')) {
   //       var data = JSON.parse( localStorage.getItem('greetingNames') );

   //       for(let i = 0; i < data.length; i++) {
   //          var elem = data[i];
   //          var name = elem.name;
            
   //          if (namesGreeted[name] === undefined){
   //              //add an entry for the user that was greeted in the Object Map
   //              namesGreeted[name] = 0;
   //          } else {
   //              namesGreeted[name]++;
   //          }
   //       }
   
   //       var name = theName.toLowerCase();
   
   //       for(var key in namesGreeted) {
   //          if(namesGreeted.hasOwnProperty(name)) {
   //             //alert(name + " already exists");
   //             return false;
   //          } else {
   //             if( localStorage.getItem('greetingNames') == null) {
   //                namesArr.push(nameObj);
   //                setCounter()
   //                localStorage.setItem('greetingNames', JSON.stringify(namesArr));
           
   //             } else {
   //                namesArr = JSON.parse(localStorage.getItem('greetingNames'));
   //                namesArr.push(nameObj);
   //                setCounter()
   //                localStorage.setItem('greetingNames', JSON.stringify(namesArr));
                 
   //             }           
   //             break;
   //          }
   //       }    
   //    } else {
   //       //alert("First appearance on the list");
   //       namesArr.push(nameObj);
   //       setCounter()
   //       localStorage.setItem( 'greetingNames', JSON.stringify(namesArr) );
   //    }
   // }

   // function saveName(theName) {
   //    var nameObj = { name: theName.toLowerCase() }
   
   //    if(localStorage.getItem('greetingNames')) {
   //       setName();
   //       checkName();
      
   //    } else {
   //       alert("First appearance on the list");
   //       namesArr.push(nameObj);
   //       setCounter()
   //       localStorage.setItem( 'greetingNames', JSON.stringify(namesArr) );
   //    }
     
      
   // }

   function saveName(theName) {
      var nameObj = { name: theName.toLowerCase() }
   
     
         setName(theName);
         checkName(theName);
      
         alert("First appearance on the list");
         namesArr.push(nameObj);
         setCounter()
       
   }

   function setName(data) {
      //var data = JSON.parse( localStorage.getItem('greetingNames') );

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
   }

   function checkName(theName) {
      var nameObj = { name: theName.toLowerCase() }
      var name = theName.toLowerCase();
   
      for(var key in namesGreeted) {
         if(namesGreeted.hasOwnProperty(name)) {
            alert(name + " already exists");
            return false;
         }

         // if(namesGreeted.hasOwnProperty(name)) {
         //    alert(name + " already exists");
         //    return false;
         // } else {
         //    if( localStorage.getItem('greetingNames') == null) {
         //       namesArr.push(nameObj);
         //       localStorage.setItem('greetingNames', JSON.stringify(namesArr));
         
         //    } else {
         //       namesArr = JSON.parse(localStorage.getItem('greetingNames'));
         //       namesArr.push(nameObj);
         //       localStorage.setItem('greetingNames', JSON.stringify(namesArr));
               
         //    }           
         //    break;
         // }      
      }
   }    

   function englishGreeting(name) {
      return "Hello, " + name;
   }

   function afrikaansGreeting(name) {
      return "Hallo, " + name;
   }

   function xhosaGreeting(name) {
      return "Molo, " + name;
   }

   function reset() {
      localStorage.clear();
      greetingsCounter = 0;
      location.reload();
   }

   function displayError(name) {
      return name == "" || !isNaN(name); 
      //alert (name == "" || !isNaN(name));
      //alert(!isNaN(name));
   }


   return {
      getCounter,
      //setCounter,
      saveName,
      reset,
      englishGreeting,
      afrikaansGreeting,
      xhosaGreeting,
      displayError,
      setName,
      checkName
     
   }
}

var greetInstance = createGreetings();

// greetInstance.saveName('isixhosa');