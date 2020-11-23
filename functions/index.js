const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const { config } = require('firebase-functions');

const stripe = require("stripe")(
    "sk_test_51HqZjKDi2Q8yJBKCfZjsziE9YnGUl1BQctQM5auFgz4hq53f83o4LJF44jhRS7PYzLUHcpRMjGP1vEa0NgTcUQfE00NfleSgIA"
    );

// API creation
// App config
const app = express();


// middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello!"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment request recieved!", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
// listen command
exports.api = functions.https.onRequest(app)

// example endpoint
// functions: http://localhost:5001/clone-ccc0d/us-central1/api