describe('ship', function (){

    var port
    var ship 

    beforeEach(function(){
        port = new Port()
        ship = new Ship(port)
    })

    it('has a starting port', function(){
        expect(ship.getCurrentPort()).toEqual(port)
    })
})