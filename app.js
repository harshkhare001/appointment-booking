const express = require('express');

const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const app = express();

const userRoute = require('./routes/userRoute');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(userRoute);


sequelize.sync().then((result)=>app.listen(3000)).catch((err)=>console.log(err));