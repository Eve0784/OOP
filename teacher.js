class Teacher extends Human{
    constructor(name, surname, students) {
        super(name, surname)
        this.students = students;
    }
    toString(){
        return super.toString();
    }
}
