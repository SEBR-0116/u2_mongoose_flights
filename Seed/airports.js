const db = require("../db");
const { Airport } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const airports = [
    {
      name: "Charlotte Douglas International Airport",
      location: "Charlotte",
      code: "CLT",
    },
    {
      name: "San Diego International Airport",
      location: "San Diego",
      code: "SAN",
    },
    {
      name: "John F. Kennedy International Airport",
      location: "New York",
      code: "JFK",
    },
    {
      name: "LaGuardia Airport",
      location: "New York",
      code: "LGA",
    },
  ];
  await Airport.insertMany(airports);
  console.log("inserted airports!");
};

const run = async () => {
  await main();
  db.close();
};

run();
