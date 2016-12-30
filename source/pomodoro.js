const moment = require('moment');
const pad = require('./utils');

class Pomodoro {
  constructor(){
    this.timerFrom = '';
    this.timerTo = '';
    this.message = '';
  }

  setTimer(time, duration) {
    this.timerFrom = moment.duration(0, 'seconds')
    this.timerTo = moment.duration(time, duration);
  }

  setMessage(message) {
    this.message = message;
  }

  getTimerTo() {
    return this.timerTo;
  }

  getMessage()  {
    return this.message;
  }

  getTime(type) {
    return pad(this[type].minutes(),0,2)+':'+pad(this[type].seconds(),0,2);
  }

  totalSeconds() {
    return this.timerTo.asSeconds()+1;
  }

  tick() {
    return this.timerFrom.add(1, 's');
  }
}

module.exports = new Pomodoro();
