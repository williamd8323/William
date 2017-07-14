function Vehicle(type, numWheels, formOfMotion, make)
{
    this.type = type;
    this.numWheels = numWheels;
    this.formOfMotion = formOfMotion;
    this.make = make;
}

var tesla = new Vehicle("Car", 4, "Drive", "Tesla Model X");

function Human(Vehicle, name, age){
    this.Vehicle = Vehicle;
    this.name = name;
    this.age = age;
}

function printObjInfo(obj)
{
    console.log("Object Info is: ");
    for(var key in obj)
    {
        if(obj[key].hasOwnProperty())
        {
            obj[key].printObjInfo();
        }
        console.log(key + ": " + obj[key]+" ");
    }
}


var man = new Human(new Vehicle("Car", 4, "fly", "tesla"), "Elon Musk", 45);

printObjInfo(man);

