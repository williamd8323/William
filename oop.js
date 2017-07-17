class Shape{
    constructor(name, width, height, isParalellogram){
        this.name = name;
        this.width = width;
        this.height = height;
        this.isPara = isParalellogram;

    }
}

class Square extends Shape{
    constructor(name, width, height, isPara, area, perimeter){
        super(name, width, height, isPara);
        this.area = area;
        this.perimeter = perimeter;
    }
}



