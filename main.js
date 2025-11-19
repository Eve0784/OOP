//console.log('object oriented programming');

//const stefania = {name: "stefania", surname: "dagnino", marks:[10, 9, 7, 8, 8]};
//const leonardo = {name: "leonardo", surname: "silva", marks:[3, 4, 4, 2, 5]};

// function calculateStudentAverage(student) {
//     let sum = 0;
//     for (let i = 0; i < student.marks.length; i++) {
//         const mark = student.marks[i];
//         sum+= mark;
//     }
//     const average = sum/student.marks.length;
//     return average;
// }
// console.log(calculateStudentAverage(stefania));
// console.log(calculateStudentAverage(leonardo));

// console.log(stefania.calculateAverage());
// console.log(leonardo.calculateAverage());

// function addMark(student, newMark) {
//     if (newMark >= 0 && newMark <= 10) {
//         student.marks.push(newMark)
//     }
//     else{
//         console.log('Errore, voto non valido');
//     }
// }
// addMark(stefania,10);
// console.log(calculateStudentAverage(stefania));

// addMark(leonardo,20);
// console.log(calculateStudentAverage(leonardo));

// function creaScheda(student) {
//     const scheda = "nome: "+ student.name+ "\n"+ 
//                    "cognome: "+ student.surname+ "\n"+
//                    "media: "+ calculateStudentAverage(student);
//     return scheda;    
// }
// console.log(creaScheda(stefania));
// console.log(creaScheda(leonardo));

// const stefania = new Student("stefania", "dagnino",[10, 9, 7, 8, 8]);
// const leonardo = new Student("leonardo", "silva",[3, 4, 4, 2, 5]);
// const salma = new Student("salma", "sobhi",[]);

// console.log(stefania.calculateAverage());
// console.log(leonardo.calculateAverage());

// stefania.addMark(10);
// console.log(stefania);

// leonardo.addMark(20);
// console.log(leonardo);

// //console.log(stefania.toString());
// console.log("Student:\n" + stefania);

// console.log(leonardo.toString());
// console.log(salma.toString());


//--------------ESERCIZIO RETTANGOLO------------------//
//  const rect1 = new Rectangle(30,20,'rosso');
//  console.log(rect1.calculateArea());
//  console.log(rect1.calculatePerimeter());
//  console.log(rect1.toString());
 

 //----------------------------ESERCIZIO TEACHER / STUDENTS / TUTOR------------------------//
 
const stefania = new Student("stefania", "dagnino", 1990, [10, 9, 7, 8, 8]);
const leonardo = new Student("leonardo", "silva", 1991, [3, 4, 4, 2, 5]);
const salma = new Student("salma", "sobhi", 2000, [6, 6, 6]);

const eros = new StudentTutor("eros", "balan", 2005, [10, 9, 7, 8, 8], leonardo);

const andrea = new Teacher("andrea", "asioli", 1970, [stefania, leonardo, salma]);
const evelyn = new Teacher("evelyn", "medina", 1985, [eros]);

const elisabetta = new Principal("elisabbetta", "fegino", 1960, [andrea, evelyn]);

// console.log(stefania.toString());
// console.log(andrea.toString());


eros.addMark(7);
// console.log(eros.calculateAverage());

leonardo.addMark(10);
leonardo.addMark(9);
leonardo.addMark(9.5);
leonardo.addMark(8);

console.log(eros.toString());
// console.log(leonardo.calculateAverage());

// console.log(eros.calculateAverage());

console.log(andrea.toString());

//nome: andrea
//cognome: asioli
//--------------------
//allievi:
//stefania dagnino - media: 8
//leonardo silva - media: 6.0555
//salma sobhi - media: 6
//--------------------
//media della classe :6,68


console.log(elisabetta.toString())
//nome: elisabetta
//cognome: fegino
//--------------------
//insegnanti:
//asioli andrea - numero studenti: 3
//evelin medina - numero studenti: 1

// eros.name = "giovanni";
// console.log(eros.toString());

const yearOfBirthOfEros = eros.yob;
console.log(yearOfBirthOfEros);

eros.yob = 3000;
console.log((eros.yob));

eros.yob = 100;
console.log((eros.yob));

eros.yob = 1993;
console.log((eros.yob));