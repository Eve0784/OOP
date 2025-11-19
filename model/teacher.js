class Teacher extends Human {
    constructor(name, surname, students) {
        super(name, surname);
        this.students = students;
    }
    calculateClassAverage(){
        let sum = 0;
        for (const student of this.students) {
            sum += student.calculateAverage();
        }
        const Average = sum/ this.students.length;
        return Average;
    }
    toString() {
        let string = "Insegnante: \nNome: " + this.name + "\n" +
            "Cognome: " + this.surname + "\n" +
            "-------------------------------------\n" +
            "Allievi: \n";
        for (const student of this.students) {
            string += student.name + " " +
             student.surname + "- media: " + 
             student.calculateAverage() + "\n";
        }
        string += "-------------------------------------\n"
        string += "Media della classe: " + this.calculateClassAverage();
        return string;
    }
}


//------------------------FATTO DA ME------------------------//
//----------nel toString--------------------//
      // let studentList= "";
        // let sum = 0;
        // for (let i = 0; i < this.students.length; i++) {
        //     const studente = this.students[i];
        //     studentList +=  studente.name + " " + studente.surname + 
        //                 " - media: " + studente.calculateAverage() +"\n";
        //     sum += this.students[i].calculateAverage();
        // }
        // const studentsAverage = sum / this.students.length;
        // return teacher + studentList + 
        // "-------------------------------------\n" + 
        // "Media della classe: " + studentsAverage;
