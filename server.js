const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Configuration
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db)
.then(() => console.log('A MongoDB csatlakoztatva van.'))
.catch(err => console.log(err));

// Use Routes
const mainRoutes = require('./Routes/api/items')
app.use(mainRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`A Szerver a következő porton fut: ${port}`));