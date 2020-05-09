require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
// Routes
const categoryRoutes = require('./routes/category');
const recipeRoutes = require('./routes/recipe');


const app = express();
const port = 3001;
// db connection
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.api.db_url);
mongoose.connection.on('connected', () => {
  console.log('MOngodb connection opened');
});
mongoose.connection.on('error', (err) => {
  console.log(`MOngodb connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
  console.log('MOngodb connection disconnected');
});
// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/api', categoryRoutes);
app.use('/api', recipeRoutes);
app.listen(port, console.log(`App running in port ${port}`));
