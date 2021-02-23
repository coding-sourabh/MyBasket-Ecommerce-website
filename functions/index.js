const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IMCKjLYvOcTW8sSrJVugqJJQF8KiVHs8RLz3POmzAdt3Z4Ens4QxJrxSwMBIxR4sLIYkMURGTwHpBOz4MEOLKR300uLo3O0Vg"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true })); // need that
app.use(express.json()); // get and parse data in json format

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-80abb/us-central1/api
