class Principal extends Human{
    constructor(name, surname, teachers) {
        super(name, surname);
        this.teachers = teachers;
    }
    toString() {
        const principal = "nome: " + this.name + "\n" +
            "cognome: " + this.surname + "\n" + "------------------\n";

        let teacherslist = "";
        
        for (let i = 0; i < this.teachers.length; i++) {
            const teacher = this.teachers[i];
            teacherslist +=  teacher.name + " " + teacher.surname +
            " - numero studenti: " + teacher.students.length + "\n";
        }
        return principal + teacherslist;
    }
}
