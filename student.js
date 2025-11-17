class Student{
    constructor(name, surname, marks){
        this.name = name;
        this.surname = surname;
        this.marks = marks;
    }
    calculateAverage(){
        let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
        const mark = this.marks[i];
        sum+= mark;
    }
    const average = sum/this.marks.length;
    return average;
    }
}