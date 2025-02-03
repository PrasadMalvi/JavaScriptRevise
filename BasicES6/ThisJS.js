const student = {
  name: "Prasad",
  age: 23,
  pass: true,
  exam() {
    console.log(this);
  }, //Funtion
};

student.exam();

const exam = student.exam.bind(student);
exam();
