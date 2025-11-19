class Student extends Human {
    constructor(name, surname, marks) {
        super(name, surname)
        if (marks) {
            this.marks = marks;
        }
        else {
            this.marks = [];
        }
    }
    //  constructor(name, surname, marks = []) {
    //     this.name = name;
    //     this.surname = surname;
    //     this.marks = marks;
    //     }

    calculateAverage() {
        if (this.marks.length === 0) {
            return "non disponibile";
        }
        let sum = 0;
        for (let i = 0; i < this.marks.length; i++) {
            const mark = this.marks[i];
            sum += mark;
        }
        const average = sum / this.marks.length;
        return average;
    }
    addMark(newMark) {
        if (newMark >= 0 && newMark <= 10) {
            this.marks.push(newMark)
        }
        else {
            console.log('Errore, voto non valido');
        }
    }
    toString() {
        const scheda = super.toString() + "\n" +
            "media: " + this.calculateAverage();
        return scheda;
    }
}

