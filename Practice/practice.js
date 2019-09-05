class Car{
    constructor(model,make,mpg,tankSize){
      this.model = model;
      this.make = make;
      this.mpg = mpg;
      this.tankSize = 30;
    };
    distancToEmpty(){
      return 30*this.mpg
    };
    drive(){
      console.log("Vroooooom")
    }
  }
  
  class ElectricCar extends Car{
    constructor(make,model,batterySize){
      super(make,model)
      this.batterySize = batterySize
    }
    distanceToEmpty(){
      return this.batterySize * 30
    }
  }
  
  const anthonysProbablyCar = new ElectricCar('Tesla,3,420')
  
  anthonysProbablyCar.drive()