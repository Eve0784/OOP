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
 
const stefania = new Student("stefania", "dagnino", [10, 9, 7, 8, 8]);
const leonardo = new Student("leonardo", "silva", [3, 4, 4, 2, 5]);
const salma = new Student("salma", "sobhi", []);

const andrea = new Teacher("andrea", "asioli", [stefania, leonardo, salma]);

const eros = new StudentTutor("eros", "balan", [10, 9, 7, 8, 8], leonardo);

console.log(stefania.toString());
console.log(andrea.toString());
console.log(eros.toString());

eros.addMark(7);
console.log(eros.calculateAverage());

leonardo.addMark(10);
leonardo.addMark(9);
leonardo.addMark(9.5);
leonardo.addMark(8);

console.log(leonardo.calculateAverage());

console.log(eros.calculateAverage());