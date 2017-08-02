const events = require('events')

const update = (interval) => {
    this.time = time
    this.array = [
        {number: 1},
        {number: 2}
    ]
    let that
    events.EventEmitter.call(this)

    this.init = function() {
        that = this
        console.log("Contructor")
        //Start interval
        setInterval(that.run,that.time)
    }

    this.run = function()
    {
        that.array.forEach(function (item) {
           if(item.number === 2)
           {
               that.emit('Event');
           }
        })
    }
}

update.prototype.__proto__ = events.EventEmitter.prototype

module.exports = update