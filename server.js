const { request } = require("express");
const express = require("express");
const data = require("./data.json");

const app = express();

//patient data
app.get(`/patients`, (request, response) => {
  response.send(data.patients);
});

//doctor data
app.get(`/doctors`, (request, response) => {
  response.send(data.doctors);
});

//patient by id
app.get(`/patients/:id`, (request, response) => {
  const id = request.params.id;
  data.patients.find((patient) => {
    patient.id === id ? response.send(patient) : response.send("not found");
  });
});

const port = 4000;

app.listen(port, () => console.log(`Listening on :${port}`)); //start listening node server.js
