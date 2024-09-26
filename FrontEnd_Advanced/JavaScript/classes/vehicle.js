class Vehicle
{
    constructor(modelno, brand, color){
        this.brand = brand;
        this.color = color;
        this.Modelno = modelno
    }

    display(){
        console.log("Brand: " + this.brand);
        console.log("Color: " + this.color);
        console.log("Modelno: " + this.modelno);
    }
}

class HeavyVehicle extends Vehicle
{
    constructor(modelno, brand, color, hasPermit){
        super(modelno, brand, color);
        this.hasPermit = hasPermit;
    }

    display(){
        super.display();
        console.log("Has permit: " + this.hasPermit);
    }
}

var hv = new HeavyVehicle(123, 'BMW', 'red', true);
console.log(hv);
hv.display();