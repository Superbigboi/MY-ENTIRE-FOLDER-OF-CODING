class Vehicle{
    constructor(feature1,feature2,feature3){
        this.property1 = feature1,
        this.property2 = feature2,
        this.property3 = feature3
    }
}

const Car = new Vehicle ("Driving", "Flash Light", "2 - 6  seaters");
const Tricycle = new Vehicle ("Riding", "3 seaters", "brake");
const Bicycle = new Vehicle ("Riding", "2 Seaters", "Gear")
console.log(Car)
console.log(Tricycle)
console.log(Bicycle)
