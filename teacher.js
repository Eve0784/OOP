class Teacher extends Human{
    constructor(name, surname, students) {
        super(name, surname);
        this.students = students;
    }
    toString() {
        const teacher = "name: " + this.name + "\n" +
            "cognome: " + this.surname + "\n" + "------------------\n";

        let studentList= "";
        let sum = 0;
        for (let i = 0; i < this.students.length; i++) {
            const studente = this.students[i];
            studentList +=  studente.name + " " + studente.surname + 
                        " - media: " + studente.calculateAverage() +"\n";
            sum += this.students[i].calculateAverage();
        }
        const studentsAverage = sum / this.students.length;
        return teacher + studentList + "------------------\n" + "media della classe: " + studentsAverage;
    }
}
