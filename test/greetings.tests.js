describe("Greetings Function", function() {
    it('should return "Hello, thando" when english button is selected', function(){
        var greetingOne = createGreetings();
       
        assert.equal(greetingOne.englishGreeting('thando'), 'Hello, thando');
      
    });

    it('should return "Hallo, Timothy" when afrikkans button is selected', function(){
        var greetingOne = createGreetings();

        assert.equal(greetingOne.afrikaansGreeting('Timothy'), 'Hallo, Timothy');
    });

    it('should return "Molo, James" when isiXhosa button is selected', function(){
        var greetingOne = createGreetings();

        assert.equal(greetingOne.xhosaGreeting('James'), 'Molo, James');

    });
  


   
   
    
});