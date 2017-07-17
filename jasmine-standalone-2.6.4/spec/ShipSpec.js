describe('ship', function (){

    var port
    var arrivalPort
    var ship 
    

    beforeEach(function(){
        port = new Port()
        arrivalPort = new Port()
        ship = new Ship(port)

    })

    it('has a starting port', function(){
        expect(ship.getCurrentPort()).toEqual(port)
    })

    it('can set sail from the port', function(){
        ship.setSail()

        expect(ship.getCurrentPort()).toBeFalsy()
    })

    it('can dock at port', function(){
        ship.dock(arrivalPort)

        expect(ship.getCurrentPort()).toEqual(arrivalPort)

    })
})