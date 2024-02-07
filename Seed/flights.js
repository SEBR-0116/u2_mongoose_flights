const db = require("../db");
const { Airport, Flight } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const departure = await Airport.find({ name: "Departing Flights" });
  const arrivals = await Airport.find({ name: "Arriving Flights" });

  const flights = [
    {
      airline: "American Airlines",
      flightNumber: 420,
      price: 369,
      numberOfSeats: 102,
      departingAirport: "John F. Kennedy International Airport",
      arrivalAirport: "Charlotte Douglas International Airport",
    },
    {
      airline: "American Airlines",
      flightNumber: 789,
      price: 570,
      numberOfSeats: 200,
      departingAirport: "John F. Kennedy International Airport",
      arrivalAirport: "San Diego International Airport",
    },
    {
      airline: "JetBlue",
      flightNumber: 241,
      price: 167,
      numberOfSeats: 120,
      departingAirport: "LaGuardia Airport",
      arrivalAirport: "Charlotte Douglas International Airport",
    },
    {
      airline: "JetBlue",
      flightNumber: 1178,
      price: 514,
      numberOfSeats: 120,
      departingAirport: "Charlotte Douglas International Airport",
      arrivalAirport: "San Diego International Airport",
    },
    {
      airline: "United Airlines",
      flightNumber: 13,
      price: 434,
      numberOfSeats: 150,
      departingAirport: "San Diego International Airport",
      arrivalAirport: "LaGuardia Airport",
    },
    {
      airline: "United Airlines",
      flightNumber: 2579,
      price: 612,
      numberOfSeats: 150,
      departingAirport: "LaGuardia Airport",
      arrivalAirport: "San Diego International Airport",
    },
    {
      airline: "United Airlines",
      flightNumber: 765,
      price: 235,
      numberOfSeats: 100,
      departingAirport: "LaGuardia Airport",
      arrivalAirport: "Charlotte Douglas International Airport",
    },
  ];
};
