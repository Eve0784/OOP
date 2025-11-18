class StudentTutor extends Student{
    constructor(name, surname, marks, tutee) {
        super(name, surname, marks)
        this.tutee = tutee;
    }
    calculateAverage(){
        const actualAverage = super.calculateAverage();
        const tuteeAverage = this.tutee.calculateAverage();
        let newAverage;

        if(tuteeAverage >= 6){
            newAverage = actualAverage + 1;
        }
        else{
            newAverage = actualAverage;
        }
        return newAverage;
    }
}
