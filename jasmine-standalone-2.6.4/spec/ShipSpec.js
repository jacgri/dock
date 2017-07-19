describe('ship', function (){

    var weather
    var port
    var arrivalPort
    var ship 
    
    

    beforeEach(function(){
        weather = new Weather()
        port = new Port(weather)
        arrivalPort = new Port()
        ship = new Ship(port)

    })

    it('has a starting port', function(){
        expect(ship.getCurrentPort()).toEqual(port)
    })

    it('can set sail from the port', function(){
        spyOn(weather, 'isStormy').and.returnValue(false)
        ship.setSail()

        expect(ship.getCurrentPort()).toBeFalsy()
    })

    it('can dock at port', function(){
        ship.dock(arrivalPort)
        expect(ship.getCurrentPort()).toEqual(arrivalPort)

    })

    it('doesn\'t set sail in stormy weather', function(){
        spyOn(weather, 'isStormy').and.returnValue(true)

        expect(function () {
            ship.setSail()
        }).toThrowError('cannot sail in stormy weather')
    })

    it('Instructs the port to embark', function(){
        spyOn(arrivalPort, 'embark')

        ship.dock(arrivalPort)

        expect(arrivalPort.embark).toHaveBeenCalledWith(ship)
    })
    it('doesn\'t dock if port at capacity', function(){
        for(shipIndex = 0; shipIndex < 8;shipIndex++){
            ship.dock(arrivalPort)
        }

        expect(function () {
            ship.dock(arrivalPort)}).toThrowError('cannot dock')    
    
    })
})