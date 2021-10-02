require("dotenv").config();
const express = require("express");
const cors = require('cors');
const loginRoutes = require("./routes/login-routes");
const app = express();

const productsRoutes = require("./routes/products-routes");
const invoiceRoute = require("./routes/invoice-route");

app.use(express.json());

app.use(cors());
app.use(express.urlencoded({extended: true}));


app.use('/api/v1',loginRoutes.routes);
app.use('/api/v1',productsRoutes.routes);
app.use('/api/v1',invoiceRoute.routes);




 


module.exports = app;