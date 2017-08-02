const EventEmitter = require('events').EventEmitter

class Updater extends EventEmitter {
    constructor(interval) {
        super()
        this.interval = interval
    }

    init() {
        console.log('Updater started.')
        console.log('-'.repeat(25))
        setInterval(() => this.emit("Event"), this.interval)
    }

}

module.exports = Updater
