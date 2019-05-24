var car = {
  getModel: function () {
    var model = 'BMW'
    console.log (model)
  },

  maximumSpeed: 160,
  currentSpeed: 0,
  isOn: false,
  fuelLevel: 0,
  speedHistory: [],
       
  speedUp: function (speed) {
    if (speed<=this.maximumSpeed ) {
    this.currentSpeed += speed
    console.log (speed)
    }
    else {
      console.log ('ERROR: not allowed speed, max allowed speed is 160')
    }
    return speed
  },

  start: function () {
    if (this.fuelLevel===0) {
      this.currentSpeed=0
      console.log ('not enough fuel')
    }
    if (this.currentSpeed!==0) { 
      this.isOn= true
      console.log ('will turn on')
    }
    this.speedHistory.push (this.currentSpeed)
  },

  addFuel: function (fuel){
    this.fuelLevel+=fuel
    console.log (fuel)
  },  
  
  turnOff: function () {
    if (this.speed<this.currentSpeed) {
    return 'will turn off car'
    }
    this.speedHistory.push (this.currentSpeed)
  },
  
  break: function (breakSpeed) {
    this.currentSpeed=breakSpeed
    return breakSpeed
  }
} 
  
    
car.getModel() // print car name
console.log(car.maximumSpeed) // 160
console.log(car.currentSpeed) // 0
console.log(car.isOn) // false
console.log(car.fuelLevel) // 0
car.speedUp(60) // should raise speed by 60
console.log(car.currentSpeed) // 0
car.start() // not enough fuel
car.addFuel(20)
car.speedUp(40)
car.start() // will turn on
console.log(car.currentSpeed) // 40
car.speedUp(60)
console.log(car.currentSpeed) // 100
car.speedUp(200) // ERROR: not allowed speed, max allowed speed is 160
car.turnOff() // will turn off car
console.log(car.isOn) // true
car.break(0) // will make car speed equal to 0, if break(20) speed will become 20
console.log(car.currentSpeed) // 0
car.turnOff()
console.log(car.speedHistory) // [0, 40, 100, 0]
//console.log(car.usageHistory)