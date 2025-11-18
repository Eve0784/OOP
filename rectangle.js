class Rectangle{
    constructor(base, height, color){
        this.base = base;
        this.height = height;
        this.color = color;
    }
    calculateArea(){
        return this.base * this.height;
    }
    calculatePerimeter(){
        return (this.base * 2) + (this.height * 2)
    }
    toString(){
        const scheda = "Rettangolo \n" +
                       "base: " + this.base + "\n" +
                       "altezza: " + this.height + "\n"+
                       "colore: " + this.color + "\n"+
                       "area: "+ this.calculateArea() + "\n"+
                       "perimetro: " + this.calculatePerimeter();
        return scheda;
    }
}
