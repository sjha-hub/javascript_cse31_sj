const fs = require('fs');

const fileName = 'student.txt';

// ---------- 1. CREATE / WRITE ----------
const studentData =
  'Name: Rahul\n' +
  'Roll Number: 101\n' +
  'Branch: CSE\n' +
  'Semester: 3\n';

fs.writeFileSync(fileName, studentData);
console.log(' File created and initial student details written successfully.\n');
console.log(' Reading initial student details...');
let data = fs.readFileSync(fileName, 'utf-8');
console.log(data);
console.log(' Initial student details displayed successfully.\n');
const updateData =
  'Subject: Full Stack Development\n' +
  'Marks: 85\n' +
  'Attendance: 92%\n';

fs.appendFileSync(fileName, updateData);
console.log(' File updated with Subject, Marks, and Attendance successfully.\n');
console.log(' Reading updated student details...');
data = fs.readFileSync(fileName, 'utf-8');
console.log(data);
console.log(' Updated student details displayed successfully.');