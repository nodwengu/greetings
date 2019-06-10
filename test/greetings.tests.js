describe("Greetings Function", function() {
    it('should return total call cost when "call" radio button is checked', function(){
        var radioBillTotal1 = radioBillTotal();
        radioBillTotal1.getCallTotal('call')

        assert.equal(radioBillTotal1.getCallTotal('call'), 5.50);
        assert.equal(radioBillTotal1.getCallTotal('call'), 8.25);
        assert.equal(radioBillTotal1.getTotal('call'), 8.25);

        radioBillTotal1.getCallTotal('call');
        radioBillTotal1.getCallTotal('call');
        radioBillTotal1.getCallTotal('call');
        radioBillTotal1.getCallTotal('call');
        assert.equal(radioBillTotal1.getTotal(), 19.25);
    });

    it('should return total sms cost when "sms" radio button is checked', function(){
        var radioBillTotal1 = radioBillTotal();

        assert.equal(radioBillTotal1.getSmsTotal('sms'), 0.75);
        assert.equal(radioBillTotal1.getSmsTotal('sms'), 1.50);
        assert.equal(radioBillTotal1.getTotal(), 1.50);

        radioBillTotal1.getSmsTotal('sms');
        radioBillTotal1.getSmsTotal('sms');
        radioBillTotal1.getSmsTotal('sms');
        radioBillTotal1.getSmsTotal('sms');
        assert.equal(radioBillTotal1.getTotal(), 4.50);
    });


    it('should return all totals when "call" and "sms" radio is checked ', function(){
        var BillTotal = radioBillTotal();

        assert.equal(BillTotal.getCallTotal('call'), 2.75);
        assert.equal(BillTotal.getSmsTotal('sms'), 0.75);
        assert.equal(BillTotal.getTotal(), 3.50);
    });

    it('should return "0.00" when no radio button has been selected', function(){
        var BillTotal = radioBillTotal();
        
        assert.equal(BillTotal.getCallTotal(), 0.00);
        assert.equal(BillTotal.getSmsTotal(),0.00);
        assert.equal(BillTotal.getTotal(), 0.00);
    });
    
});