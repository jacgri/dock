function Ship (port) {
    _currentPort = port
}

Ship.prototype = {
    getCurrentPort: function () {
        return _currentPort
    }
    }