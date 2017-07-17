describe('Port', function(){
    var weather
    var port

    beforeEach(function (){
        weather = new Weather()
        port = new Port(weather)
    })

    it('has weather', function(){
        expect(port.getWeather()).toEqual(weather)
    })
})