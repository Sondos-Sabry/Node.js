import express from "express";

const app = express();

const students = [
  {
    id: 1,
    name: "Sondos",
    city: "Shiben",
  },
  {
    id: 2,
    name: "Sara",
    city: "Tanta",
  },
  {
    id: 3,
    name: "Shimaa",
    city: "Shiben",
  },
  {
    id: 4,
    name: "Mohamed",
    city: "Cairo",
  },
  {
    id: 5,
    name: "Mahmoud",
    city: "Giza",
  },
];

const studentFunction = (request, response) => {
    let output = "<ol>";
    for (let i=0; i < students.length; i++) {
    const student = students[i];
    output += "<li  style='font-size:20px; font-weight:bold; padding-bottom:5px ;'>" + student.name + "</li>";
    }
    output += "</ol>";
    response.send(output);

};
app.get("/student", studentFunction);

app.listen(5000);
