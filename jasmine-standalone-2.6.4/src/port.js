function Port(weather) {
this._weather = weather
}

Port.prototype = {
    getWeather: function (){
        console.log(this._weather)
        return this._weather
    }
}