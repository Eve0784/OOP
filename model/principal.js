class Principal extends Human{
    constructor(name, surname, teachers) {
        super(name, surname);
        this.teachers = teachers;
    }
    toString() {
        let string = "Preside: \n" + super.toString()+"\n" +
             "-------------------------------------\n"+
            "Insegnanti: "+ "\n";
        
        // for (let i = 0; i < this.teachers.length; i++) {
        //     const teacher = this.teachers[i];
        //     string +=  teacher.name + " " + teacher.surname +
        //     " - numero studenti: " + teacher.students.length + "\n";
        // }

        //con forof
         for (const teacher of this.teachers) {
            string += teacher.name + " " + teacher.surname + "- Numero allievi: "
            + teacher.students.length + "\n"; 
        }
        return string;
    }
}
