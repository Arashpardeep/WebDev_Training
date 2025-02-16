export {}
class Vehicle
{
    model:string;
    private _color: string;


    public get color(): string {
        return this._color;
    }
    public set color(value: string) {
        this._color = value;
    }

    constructor(model:string,color:string)
    {
        this.model=model;
        this.color=color;
    }
    

}
class Car extends Vehicle 
{
    price:number;
    constructor(model:string,color:string,price:number)
    {
        super(model,color);
        this.price=price;
    }
    display()
    {
        console.log("Model: "+this.model);
        console.log("Color: "+this.color);
        console.log("Price: "+this.price);
    } 
    
}
var c=new Car('Honda','Red',10000000);

c.color='green';
console.log(c.color);
c.display();

//run with this command  
//tsc -t es5 script.ts

